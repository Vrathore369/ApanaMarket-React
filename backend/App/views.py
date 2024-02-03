from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages, auth
import json
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect
from . models import *
from django.db.models import Sum
from django.contrib.auth import update_session_auth_hash 
from django.contrib.auth.forms import PasswordChangeForm
from xhtml2pdf import pisa
from django.template.loader import get_template
from django.contrib.auth import get_user_model, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, ProductSerializer, CartSerializer, CustomerSerializer, OrderPlacedSerializer, CouponSerializer, CategorySerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_username, validate_password
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import authentication_classes, permission_classes



class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	def post(self, request):
		data = request.data
		assert validate_username(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)  # type: ignore
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)


def UserData(request):
    if request.user.is_active:
        user_id= request.user.id,
        username= request.user.username,
        useremail= request.user.email,
        admin= str(request.user.is_superuser),
        product_count_in_cart = len(Cart.objects.filter(user=request.user))
        if request.user:
            user=request.user
        user=True
    else:
        product_count_in_cart = 0
        user_id = None
        username = None
        useremail = None
        admin=False
        user=False
    data = {
        'product_count_in_cart': product_count_in_cart,
        'user_id': user_id,
        'username': username,
        'useremail': useremail,
        'admin': admin,
        'user': user,
    }
    return JsonResponse(data, safe=False)


class ProductListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        products = Product.objects.all().order_by("?")
        categories = {
            'M': [],
            'L': [],
            'MF': [],
            'WF': [],
            'G': [],
            'H': [],
            'E': [],
            'T': [],
            'Md': []
        }
        for product in products:
            categories[product.category].append(product)
        category_serializers = {}
        for category, products_list in categories.items():
            serializer = CategorySerializer({'category': category, 'products': products_list}, context={'request': request}).data
            category_serializers[category] = serializer
        data = {
            'products': ProductSerializer(products, many=True, context={'request': request}).data,
            'categories': category_serializers,
            'tag': 'success',
            'message': 'This is a success message',
        }
        return Response(data)


class ProductDetailAPIView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, title):
        try:
            product = Product.objects.filter(title=title)
            product_serializer = ProductSerializer(product, many=True, context={'request': request})
            response_data = {
                'products': product_serializer.data,
            }
            return Response(response_data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)


class CartView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        user = request.user
        cart_items = Cart.objects.filter(user=user)
        cart_len = len(Cart.objects.filter(user=user))
        serializer = CartSerializer(cart_items, many=True)
        total_price = sum(item.product.selling_price * item.quantity for item in cart_items)
        product_price = sum(item.product.discounted_price * item.quantity for item in cart_items)
        discount_price = (total_price-product_price)
        shipping = 0
        shipping_prices = {
            99: 99,
            199: 95,
            299: 89,
            399: 85,
            499: 79,
            500: 75,
            799: 70,
            999: 55,
            1249: 50,
            1499: 25,
            1999: 19
        }
        for price, shipping_cost in shipping_prices.items():
            if product_price <= price:
                shipping = shipping_cost
                break
        final_price = product_price + shipping 
        response_data = {
            'cart_value': cart_len,
            'cart_items': serializer.data,
            'total_price': total_price,
            'product_price': product_price,
            'discount_price': discount_price,
            'shipping_price': shipping,
            'final_price': final_price,
        }
        return Response(response_data, status=status.HTTP_200_OK)
    def post(self, request):
        user = request.user
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        cart_item, created = Cart.objects.get_or_create(user=user, product=product)
        if not created:
            cart_item.quantity += int(quantity)
            cart_item.save()
        serializer = CartSerializer(cart_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def delete(self, request, pk):
        user = request.user
        try:
            cart_item = Cart.objects.get(pk=pk, user=user)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=status.HTTP_404_NOT_FOUND)
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProfileAPIView(APIView):
    def post(self, request):
        inputName = request.data.get("inputName", "default")
        inputEmail = request.data.get("inputEmail", "default")
        inputAddress = request.data.get("inputAddress", "default")
        inputAddress2 = request.data.get("inputAddress2", "default")
        inputCity = request.data.get("inputCity", "default")
        inputState = request.data.get("inputState", "default")
        inputZip = request.data.get("inputZip", "default")
        inputGender = request.data.get("inputGender", "default")
        inputPhone = request.data.get("inputPhone", "default")
        inputAge = request.data.get("inputAge", "default")
        inputType = request.data.get("inputType", "default")
        if not inputAge or inputAge == '':
            inputAge = '13'
        if Customer.objects.filter(email=inputEmail).exists():
            return Response({"error": "You already added this Email!"}, status=status.HTTP_400_BAD_REQUEST)
        elif Customer.objects.filter(phone=inputPhone).exists():
            return Response({"error": "You already added this Mobile Number!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputName) == 0:
            return Response({"error": "Please Add Your Name!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputEmail) == 0:
            return Response({"error": "Please Add Your Email!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputAddress) == 0:
            return Response({"error": "Please Add Your Address!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputCity) == 0:
            return Response({"error": "Please Add Your City!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputZip) == 0:
            return Response({"error": "Please Add Your Pincode!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputName) < 3:
            return Response({"error": "Your Name cannot be less than 3 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputName) > 40:
            return Response({"error": "Your Name cannot be greater than 40 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputEmail) < 5:
            return Response({"error": "Your Email cannot be less than 5 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputEmail) > 50:
            return Response({"error": "Your Email cannot be greater than 50 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputCity) < 3:
            return Response({"error": "Your City cannot be less than 3 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputCity) > 50:
            return Response({"error": "Your City cannot be greater than 50 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputAddress) < 3:
            return Response({"error": "Your Address cannot be less than 3 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputAddress) > 200:
            return Response({"error": "Your Address cannot be greater than 200 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputAddress2) > 200:
            return Response({"error": "Your Landmark cannot be greater than 200 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputZip) < 6:
            return Response({"error": "Your Pincode must be only 6 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputZip) > 6:
            return Response({"error": "Your Pincode must be only 6 Characters!"}, status=status.HTTP_400_BAD_REQUEST)
        elif inputAge <= '12':
            return Response({"warning": f"Your Age {inputAge} is Underage for Our Website!"}, status=status.HTTP_200_OK)
        elif inputAge > '80':
            return Response({"error": f"Really Your Age is {inputAge}... Please check it again!"}, status=status.HTTP_400_BAD_REQUEST)
        elif len(inputPhone) > 10:
            return Response({"error": "Your Mobile Number must be only 10 Digits!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            customer_data = {
                'user': request.user.id,
                'name': inputName,
                'email': inputEmail,
                'locality': inputAddress,
                'landmark': inputAddress2,
                'city': inputCity,
                'state': inputState,
                'zipcode': inputZip,
                'gender': inputGender,
                'phone': inputPhone,
                'age': inputAge,
                'address': inputType
            }
            serializer = CustomerSerializer(data=customer_data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": f"Congratulations...{inputName}! Your Address has been Updated Successfully!"}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
   
class MobileAPIView(APIView):
    def get(self, request, data=None):
        brand_list = ['Oneplus', 'Apple', 'Samsung', 'Vivo', 'Oppo', 'Redmi', 'Realme', 'Google']
        mob_brand = data in brand_list
        if data is None:
            mobiles = Product.objects.filter(category="M").order_by('?').reverse()
        elif mob_brand:
            mobiles = Product.objects.filter(category="M", brand=data)
        elif data == 'low_to_high':
            mobiles = Product.objects.filter(category="M").order_by('discounted_price')
        elif data == 'high_to_low':
            mobiles = Product.objects.filter(category="M").order_by('discounted_price').reverse()
        elif data == 'customer_rating':
            mobiles = Product.objects.filter(category="M").order_by('rating').reverse()
        elif data == 'customer_review':
            mobiles = Product.objects.filter(category="M").order_by('review').reverse()
        elif data == 'below_10000':
            mobiles = Product.objects.filter(category="M", discounted_price__lt=10000).order_by('discounted_price').reverse()
        elif data == 'below_20000':
            mobiles = Product.objects.filter(category="M", discounted_price__lte=20000).order_by('discounted_price').reverse()
        elif data == 'below_30000':
            mobiles = Product.objects.filter(category="M", discounted_price__lte=30000).order_by('discounted_price').reverse()
        elif data == 'below_50000':
            mobiles = Product.objects.filter(category="M", discounted_price__lt=50000).order_by('discounted_price').reverse()
        else:
            mobiles = Product.objects.filter(category="M", discounted_price__gt=50000).order_by('discounted_price')
        serializer = ProductSerializer(mobiles, many=True)
        return Response({'mobiles': serializer.data}, status=status.HTTP_200_OK)
    
    
                  
class AddToCartAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, pk):
        user = request.user
        product_id = request.data.get("prod_id")
        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        if Cart.objects.filter(user=user, product=product).exists():
            return Response({'error': 'Product already in the cart'}, status=status.HTTP_400_BAD_REQUEST)
        cart_item = Cart.objects.create(user=user, product=product, quantity=1)
        cart_serializer = CartSerializer(cart_item)
        return Response(cart_serializer.data, status=status.HTTP_201_CREATED)
    
    
@login_required(login_url="/login")
def add_to_cart(request,pk):
    products=Product.objects.filter(pk = pk)
    total_price=0
    shipping_price=0
    if request.user.is_authenticated:
        product_count_in_cart=len(Cart.objects.filter(user=request.user))
    else:
        product_count_in_cart=1
    user=request.user
    product_id=request.GET.get("prod_id")
    product=Product.objects.filter(pk=product_id).first()
    for p in products:
        total_price=total_price+(p.discounted_price)
        print(f"t={total_price}")
    shipping_prices = {
            99: 99,
            199: 95,
            299: 89,
            399: 85,
            499: 79,
            500: 75,
            799: 70,
            999: 55,
            1249: 50,
            1499: 25,
            1999: 19
        }
    for price, shipping in shipping_prices.items():
        if total_price <= price:
            shipping_price = shipping
            break 
    Cart.objects.create(user=user,product=product,quantity=1)
    product_detail=Product.objects.get(pk=pk)
    response = JsonResponse({'products':products})
    messages.success(request, product_detail.title + ' added to cart successfully!')
    response = redirect(f"/cart")
    return response
@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            firstname = data['firstname']
            lastname = data['lastname']
            username = data['username']
            email = data['email']
            password = data['password']
            confirmpassword = data['confirmpassword']
            if not (username and email and password):
                return JsonResponse({'message': 'All fields are required.', 'tag': 'error'}, safe=False)

            if User.objects.filter(username=username).exists():
                return JsonResponse({'message': 'Username is already taken.', 'tag': 'error'}, safe=False)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'message': 'Email is already registered.', 'tag': 'error'}, safe=False)

            user = User.objects.create_user(first_name=firstname, last_name=lastname, username=username, email=email, password=password)
            user.save()
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'redirect': '/user'})
            else:
                return JsonResponse({'message': 'Registration failed. Unable to authenticate user.', 'tag': 'error'}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data.', 'tag': 'error'}, status=400)

    return JsonResponse({'message': 'Invalid request method.', 'tag': 'warning'}, safe=False)

# @csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data['username']
        password = data['password']

        user = auth.authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, 'Login successful.')
            return JsonResponse({'message': f'Login Success!{username}',
                                 'tag': 'success',
                                 'user': user.is_active}, safe=False)

        return JsonResponse({'message': 'Invalid credentials.', 'tag':'error'}, safe=False)
    return JsonResponse({'error': 'Invalid request method.'}, safe=False)

@login_required
def dashboard(request):
    return JsonResponse({'username': request.user.username})

def logout_view(request):
  logout(request)
  messages.success(request, 'Logout successful.')
  return JsonResponse({'success': True})
