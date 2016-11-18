//RELACION 4 TEMA 4 DAW DWEC
//Jose Pablo Ferre Leorini


//Comprueba que es la tecla enter la que se ha pulsado//
function compruebaTecla(e){
    if(e.keyCode === 13){
        e.preventDefault();
        compruebaCookie();
    }
}

//Funciones para iniciar sesión, comprobar la existencia de una sesión y salir de la sesión.//
function creaCookie(usuario){
    var date = new Date();
    date.setTime(date.getTime()+(5*60*1000));
    var expires = "expires="+date.toGMTString();
    document.cookie = "username=" + usuario + ";" + expires;
    alert("Bienvenido de nuevo " + usuario);
}

//Para la variante por defecto de crearCookie y borrarCookie//
/*
function crearCookie(identificador,valor,fechaExpiracion){
    var date = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+date.toGMTString();
    document.cookie = identificador +"="+ valor + ";" + expires;
}

function borrarCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
*/
//------------------------------------------//

//buscaCookie es una función que sirve para cualquier cookie
function buscaCookie(nombreCookie){
    var usuario = nombreCookie + "=";
    var listaCookies = document.cookie.split(';');
    for(var i = 0; i <listaCookies.length; i++) {
        var c = listaCookies[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(usuario) == 0) {
            return c.substring(usuario.length,c.length);
        }
    }
    return "";
}

function compruebaCookie() {
    var usuario = buscaCookie("username");
    if (usuario != "") {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logoff').style.display = 'block';
        alert("Bienvenido de nuevo " + usuario);
    } else {
        usuario = document.getElementsByName('userid')[0].value;
        if (usuario != "" && usuario != null) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('logoff').style.display = 'block';
            creaCookie(usuario);
        }
    }
}

function borraCookie(){
    document.getElementById('login').style.display = 'block';
    document.getElementById('logoff').style.display = 'none';
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

//2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.

function aumenta(){
    var x = document.getElementById('contenido').style.fontSize;
    document.getElementById('contenido').style.fontSize=(parseInt(x)+1)+'px';
}

function reduce(){
    var x = document.getElementById('contenido').style.fontSize;
    document.getElementById('contenido').style.fontSize=(parseInt(x)-1)+'px';
}

function cambiaFondo(){
    document.body.style.backgroundColor= '#ccffff';
    if(document.getElementById('especial').style.backgroundColor== 'white'){
    document.getElementById('especial').style.backgroundColor='#ccffff';
    }
}

function cambiaBGParrafo(){
    document.getElementById('especial').style.backgroundColor= '#aaff80';
}

function pordefecto(){
    document.getElementById('especial').style.backgroundColor= 'white';
    document.body.style.backgroundColor= 'white';
    document.getElementById('contenido').style.fontSize = '16px';
}

//Eventos de carga y descarga de la web//
window.onload = function(){
    document.getElementById('contenido').style.fontSize = '16px';
    compruebaCookie();
}

document.onload = function(){
    compruebaCookie();
}

//3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.
/*Esta es la única manera que he encontrado para que se cierre la sesión al cerrar el navegador, aunque también sucede al recargar la página (a efectos de ventana es lo mismo).*/

 window.onbeforeunload = function(){
    borraCookie();
}