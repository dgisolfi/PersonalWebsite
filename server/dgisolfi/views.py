# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponsePermanentRedirect
from django.views.generic import TemplateView
from django.shortcuts import render, redirect
import requests
import json
import os

class Index(TemplateView):
    def get(self, request):
        return HttpResponsePermanentRedirect('home')

class Home(TemplateView):
    def get(self, request):
        return render(request, 'dgisolfi/home.html')

class About(TemplateView):
    def get(self, request):
        return render(request, 'dgisolfi/about.html')

class Projects(TemplateView):
    # get enviorment variables
    GIT_API_URL='https://api.github.com'

    try:
        USER = os.environ['USER']
        API_TOKEN = os.environ['API_TOKEN']
    except:
        print('user and api token enviorment variables not found!')
        USER = None
        API_TOKEN = None

    def get(self, request):
        args = {
            'repositories':self.getRepositories()
        }

        return render(request, 'dgisolfi/projects.html', args)

    def getRepositories(self):
        url = f'/users/{self.USER}/repos'
        exceptions = [
           'dgisolfi',
           'LegacyDgisolfiSite',
        ]
        repositories = []
        try:
            response = requests.get(f'{self.GIT_API_URL}{url}', auth=(self.USER, self.API_TOKEN))
            # print(json.dumps(response.json(), indent=4))
            for index, repo in enumerate(response.json()):
                if repo['name'] in exceptions:
                    pass
                elif 'cmpt' in repo['name'].lower():
                    pass
                else:
                    repositories.append({
                        'name': repo['name'],
                        'description': repo['description'],
                        'name': repo['name'],
                        'url': repo['html_url'],
                        'homepage': repo['homepage'],
                        'language': repo['language'],
                        'stars': repo['stargazers_count'],
                    })
        except:
            print('Failed to get api request from %s' % url)
            
        return repositories

class Github(TemplateView):
    def get(self, request):
        return HttpResponsePermanentRedirect('https://github.com/dgisolfi')

class Linkedin(TemplateView):
    def get(self, request):
        return HttpResponsePermanentRedirect('https://www.linkedin.com/in/dgisolfi/')

