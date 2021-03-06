function Send(){
    var input = document.getElementById("text");
    send('Deb/' + input.value);
    input.value = '';
}

function send(text){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', text, false);
    xhr.send();
}

function init(){
    var style = document.getElementById("Styles");
    var screenWidth = window.innerWidth;
    const pc_style = "styles.css";
    const phone_style = "Mobilestyles.css";

    if (screenWidth <= 900){
        if (style.href == phone_style)
            return;
        style.href = phone_style;
        return;
    }
    if (screenWidth > 900){
        if (style.href == pc_style)
            return;
        style.href = pc_style;
        return;
    }

}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        Send();
    }
});

function file_select(){
    var input = document.createElement("input");
    input.type = "file";
    input.click();

    input.onchange = e => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = readerEvent => {
           var content = readerEvent.target.result; // this is the content!
           console.log(content);
           send('?send_file&file_name=' + file.name + '&val=' + content);
        }
    }
}