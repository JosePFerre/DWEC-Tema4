function aumenta(){
    var x = document.body.style.fontSize;
    document.body.style.fontSize=(parseInt(x)+1)+'px';
}

function reduce(){
    var x = document.body.style.fontSize;
    document.body.style.fontSize=(parseInt(x)-1)+'px';
}

function justificar(){
    document.body.style.textAlign='center';
}

function justificarIzq(){
    document.body.style.textAlign='left';
}

window.onload = function(){
    document.body.style.fontSize = '16px';
}