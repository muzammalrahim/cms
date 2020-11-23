from rest_framework import serializers
from .models import Role
from cms_project.models import ContactUsQuery
from django.contrib.auth.models import User

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['user', 'role',]


class UserListSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username']

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'


class ContactUsQuerySerializer(serializers.ModelSerializer):
	class Meta:
		model = ContactUsQuery
		fields = '__all__'


class LoginSerializer(serializers.HyperlinkedModelSerializer):
	role = 'admin'
	class Meta:
		model = User
		fields = ('username', 'email', 'first_name', 'last_name')

