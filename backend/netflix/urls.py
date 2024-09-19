"""
URL configuration for netflix project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin                     # parte de admin do backend
from django.urls import path, include                # ta importando o path das urls do próprio django, o path a gente usa pra criar os endpoints

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))                # pra ficar mais organizado, as urls da api serão feitas dentro da api 
]
