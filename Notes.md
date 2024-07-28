# Django Setup
### cmd : pip install django djangorestframework
## Starting a Django project
### cmd : django-admin startproject (project name)
## Creating a Django App
### cmd : django-admin startapp (app name)
- After we create an App , we need to add the app in our project's settings.py 

# Different Files in a Django Project Directory
## settings.py file
- Where all the configurations of the project are found
1. Installed app - If we create a new app , we need to add it in this file for the project to access it.
```python
    # Because we created 2 new apps called 'api' & 'rest_framework' , we need to add it into our project settings
    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig',                   <====
    'rest_framework'                        <====
    ]
```


## urls.py file
- This file in our project directory slightly differs from other urls.py files . 
- This the the place where the webpage first enters to seek for endpoint pathways 
- We need to specify here where to send our webpage to 
```python
    # Used to send us to different APP/endpoints
    path('api/', include('api.urls'))

    # Extract the path to urls.py file in api APP
    # ( extracts the path of . => api file => urls.py )
    include('api.urls')
```

# Different Files in a Django APP

## views.py file
- Where we write all of our endpoints functions for the APP.

## urls.py file
- A place for us to execute a specific function when it reaches a certain endpoint
```python
    # Used to execute the main function when the endpoint is 'home'
    urlpatterns = [
    path('home', main),
    ]
```
## models.py file
- This like a database for our app (not 100% accurate)
- In Django ,instead of creating a table , we create a model
- Django allows us to write python code and it will intepret that python code and automatically perform database operations

## serializers.py file
- We can use Django's rest_framework to serialize our class and convert it into diff file formats for front end to understand (JSON files)

# React Setup
## Starting a React Frontend workspace
### cmd : npm init -y 

## Some cmds related to this project 
### cmd : npm i webpack webpack-cli 
- for installing webpack 
- webpack : take all of our source Javascript files and compile/bundle it into one single Javascript file.