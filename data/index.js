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
    var Styles = document.getElementById("Styles");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    if (screenWidth <= 900 && Styles.href === "styles.css"){
        Styles.href = "Mobilestyles.css";
        alert("Width: " + screenWidth + '\nHeight: ' + screenHeight);
    }
    else if (screenWidth > 900 && Styles.href === "Mobilestyles.css"){
        Styles.href = "styles.css";
        alert("Width: " + screenWidth + '\nHeight: ' + screenHeight);
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