from django.shortcuts import render

# Create your views here.

# Allows use to render the index.html file (React will take care of the rendering)
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')