//Jose Pablo Ferre Leorini 2ºDAW DWEC
//Tema 4. Relacion 1.


/*
1-Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.*/
/*
document.addEventListener('click', alerta);
function alerta(event){
    alert('¡Has hecho click, enhorabuena!');
}
*/
/*
2-Captura el movimiento del ratón, para que se muestre la posición en la que se encuentra en cada momento. */
/*
document.addEventListener('mousemove', muestraCoords);
function muestraCoords(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "Coordenadas: (" + x + "," + y + ")";
    document.getElementById('contenido').innerHTML = coords;
}
*/
/*
4-Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón en dos colores diferentes. Para ello primero simularemos que disponemos de un canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño (100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.

5-Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón).
*/

/*
function creaTabla(filas){
    var tabla = document.createElement('table');
    tabla.id = 'tabla';
        for(let i=0;i<filas;i++){
        var fila = tabla.insertRow();
        fila.addEventListener('click', borrafila);
            for(let j=0;j<filas;j++){
                var casilla = fila.insertCell(); casilla.addEventListener('mouseover', pinta);
            }
        }
    document.body.appendChild(tabla);
}

function pinta(event){
    if (event.ctrlKey){
       event.currentTarget.style.backgroundColor = 'red';
    }else if (event.shiftKey){
       event.currentTarget.style.backgroundColor =  'blue';
    }
}

function borrafila(event){
    if(event.button==0){
        for(casilla of event.currentTarget.cells){
            casilla.style.backgroundColor='';
        }
    }
}

function borratodo(){
    var tabla = document.getElementById('tabla');
    for (fila of tabla.rows){
        for(casilla of fila.cells){
            casilla.style.backgroundColor='';
        }
    }
}

window.onload = function(){
    creaTabla(50);
    var button = document.createElement('button');
    button.innerHTML = 'Borra Todo';
    document.body.appendChild(button);
    button.onclick = borratodo;
}
*/

/*9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).
*/
/*
var activado;
var offsetX;
var offsetY;
function creaImg(){
    var imagen = document.createElement('img');
    imagen.src = 'pollo.jpg';
    imagen.id = 'imagen';
    document.body.appendChild(imagen);
    imagen.addEventListener('mousedown',activa);
    imagen.addEventListener('mouseup',desactiva);
    document.addEventListener('mousemove', obtieneCoords);
}

function activa(event){
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    activado = true;
}

function desactiva(event){
    activado = false;
}

function obtieneCoords(event){
    event.preventDefault();
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    if (activado) arrastra(x,y);
}

function arrastra(x, y){
    var img = document.getElementById('imagen');
    img.style.left = (x+'px');
    img.style.top = (y+'px');
}


window.onload = function(){
    creaImg();
}
*/
/*
10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/

/*
var id;
var activado;
var offsetX;
var offsetY;
function seleccionaImg(){
    for (img of document.images){
        img.addEventListener('mousedown',activa);
        img.addEventListener('mouseup',desactiva);
    }
    document.addEventListener('mousemove', obtieneCoords);
}

function activa(event){
    id = event.target.id;
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    activado = true;
}

function desactiva(event){
    activado = false;
}

function obtieneCoords(event){
    event.preventDefault();
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    if (activado) arrastra(x,y);
}

function arrastra(x, y){
    var img = document.getElementById(id);
    img.style.left = (x+'px');
    img.style.top = (y+'px');
}


window.onload = function(){
    seleccionaImg();
}
*/