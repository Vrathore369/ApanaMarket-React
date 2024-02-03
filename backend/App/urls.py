# authentication/urls.py
from django.urls import path
from .views import *
from . import views
urlpatterns = [
    path('auth/', UserData, name='auth'),
    path('home/', ProductListView.as_view(), name='home'),
    path('product-detail/<str:title>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('cart/', CartView.as_view(), name='cart'),
    path('profile/', ProfileAPIView.as_view(), name='profile'),
    path('mobile/', MobileAPIView.as_view(), name='mobile'),
    path('mobile/filter=<str:data>/', MobileAPIView.as_view(), name='mobile_data'),
    path('add-to-cart/<int:pk>/', AddToCartAPIView.as_view(), name='add-to-cart'),
    path('register3/', register, name='register'),
    path('login3/', login_view, name='login'),
    path('dashboard/', dashboard, name='dashboard'),
    path('logout3/', logout_view, name='logout'),
	path('register/', views.UserRegister.as_view(), name='register'),
	path('login/', views.UserLogin.as_view(), name='login'),
	path('logout/', views.UserLogout.as_view(), name='logout'),
	path('user/', views.UserView.as_view(), name='user'),
]
