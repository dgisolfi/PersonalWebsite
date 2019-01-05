# All urls to be handeled by the dashboard app
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.Index.as_view(), name='index'),
    url(r'^home', views.Home.as_view(), name='home'),
    url(r'^about', views.About.as_view(), name='about'),
    url(r'^projects', views.Projects.as_view(), name='projects'),
    url(r'^github', views.Github.as_view(), name='github'),
    url(r'^linkedin', views.Linkedin.as_view(), name='linkedin'),
]