from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User, AbstractBaseUser
UserModel = User
from .models import Customer, Product, Cart, Coupon, OrderPlaced


class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(first_name=clean_data['firstname'], last_name=clean_data['lastname'],email=clean_data['email'], password=clean_data['password'],username = clean_data['username'])
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	username = serializers.CharField()
	password = serializers.CharField()
	def check_user(self, clean_data: dict) -> AbstractBaseUser:
		username = clean_data.get('username')
		password = clean_data.get('password')
		if not username or not password:
			raise ValidationError('Username and password are required.')
		user = authenticate(username=username, password=password)
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username', 'is_authenticated', 'is_superuser')
  
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    # is_in_cart = serializers.SerializerMethodField()
    # def get_is_in_cart(self, obj):
    #     user = self.context['request'].user
    #     if user.is_authenticated:
    #         cart_product_ids = Cart.objects.filter(user=user, product=obj).exists()
    #         return cart_product_ids
    #     return False
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.Serializer):
    category = serializers.CharField()
    products = ProductSerializer(many=True)
    
class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    # total_price = serializers.SerializerMethodField()
    # product_price = serializers.SerializerMethodField()
    # saving_price = serializers.SerializerMethodField()
    # shipping_price = serializers.SerializerMethodField()
    # final_price = serializers.SerializerMethodField()
    # coupon_price = serializers.SerializerMethodField()
    # discount_pct = serializers.SerializerMethodField()
    # applied_c_price = serializers.SerializerMethodField()
    # final_saving_price = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = '__all__'
    # def get_total_price(self, obj):
    #     return obj.product.discounted_price * obj.quantity
    # def get_product_price(self, obj):
    #     return obj.product.selling_price * obj.quantity
    # def get_saving_price(self, obj):
    #     return obj.product.selling_price * obj.quantity - self.get_total_price(obj)
    # def get_shipping_price(self, obj):
    #     total_price = sum(item.product.discounted_price * item.quantity for item in obj)
    #     shipping_prices = {
    #         99: 99,
    #         199: 95,
    #         299: 89,
    #         399: 85,
    #         499: 79,
    #         500: 75,
    #         799: 70,
    #         999: 55,
    #         1249: 50,
    #         1499: 25,
    #         1999: 19
    #     }
    #     for price, shipping in shipping_prices.items():
    #         if total_price <= price:
    #             return shipping
    #     return 0
    # def get_final_price(self, obj):
    #     return self.get_total_price(obj) + self.get_shipping_price(obj)
    # def get_coupon_price(self, obj):
    #     return 0
    # def get_discount_pct(self, obj):
    #     return 125 / 45 * 100
    # def get_applied_c_price(self, obj):
    #     return 0
    # def get_final_saving_price(self, obj):
    #     return self.get_product_price(obj) - self.get_total_price(obj) + self.get_coupon_price(obj)
    
class OrderPlacedSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = OrderPlaced
        fields = '__all__'