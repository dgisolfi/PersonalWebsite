# !/usr/bin/python3
# Author: Daniel N. Gisolfi
# Purpose: Define all routes for my Personal Website
# Date: 2018-11-16

from OpenSSL import SSL
from flask import Flask, render_template, jsonify, request, redirect

app = Flask(__name__)

context = SSL.Context(SSL.SSLv23_METHOD)
context.use_privatekey_file('/etc/letsencrypt/live/www.dgisolfi.xyz/privkey.pem')
context.use_certificate_file('/etc/letsencrypt/live/www.dgisolfi.xyz/fullchain.pem')
app_port=80

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/projects', methods=['GET'])
def projects():
    return render_template('projects.html')



# EXTERNAL APPS

@app.route('/DOS', methods=['GET'])
def DOS():
    return redirect('http://www.dgisolfi.xyz:48000/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app_port, debug=False, ssl_context=context)