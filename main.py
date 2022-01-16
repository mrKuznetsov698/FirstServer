from flask import Flask, send_file, redirect
import util

app = Flask(__name__)
util.setup()


@app.route('/')
def home():
    print('start page')
    return send_file(util.localPath + '/data/index.html')


@app.route('/?send_file&file_name=<file_name>&val=<val>')
def uploading_file(file_name, val):
    print('uploading_file')
    print('file name =', file_name)
    print('file data =', val)
    util.debug(typ='text', data='Uploaded file \"' + file_name + '\"')
    f = open(file_name, 'w')
    f.write(val)
    f.close()
    return redirect('/')


@app.route('/<file_name>')
def icon(file_name):
    return send_file(util.localPath + '/data/' + file_name)


@app.route('/Deb/<text>')
def deb(text):
    util.debug('text', text)
    return redirect('/')


app.run(port=2000, host='0.0.0.0')
