from flask import Flask, send_file, redirect
import util

app = Flask(__name__)
util.setup()


@app.route('/')
def home():
    print('start page')
    return send_file(util.localPath + '/data/index.html')


@app.route('/<file_name>')
def icon(file_name):
    return send_file(util.localPath + '/data/' + file_name)


@app.route('/Deb/<text>')
def deb(text):
    util.debug('text', text)
    return redirect('/')


app.run(port=80, host='0.0.0.0')
