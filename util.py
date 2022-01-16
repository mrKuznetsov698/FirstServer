from datetime import datetime

localPath = ''
DebugFile = 'Log.txt'
UploadFolder = '/Files'


def only_filename(fn: str):
    fn = fn.replace('\\', '/')
    fn = fn[fn.rfind('/')+1:]
    return fn


def setup():
    global localPath
    localPath = '/'.join(str(__file__).split('\\')[:-1])
    try:
        open(DebugFile, 'a')
    except FileNotFoundError:
        open(DebugFile, 'w')


def debug(typ, data, fl_name=None):
    if typ == 'text':
        with open(DebugFile, 'a') as fl:
            fl.write(datetime.now().strftime('%d.%m.%y %H:%M:%S --- ') + data + '\n')
    elif typ == 'file':
        debug('text', 'Uploaded file \"' + fl_name + '\"')

