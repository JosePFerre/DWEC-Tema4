//RELACION 2 TEMA 4 DAW DWEC
//Jose Pablo Ferre Leorini

//A. Cambiando los estilos con javascript.
/*
function cambiaNormal(){
    var html = document.getElementById('html');
    var body = document.getElementById('body');
    var bloque = document.getElementById('bloqueAzul');
    var contenido = document.getElementById('contenido');
    var temas = document.getElementById('temas');
    var marco = document.getElementById('marco');
    html.style.backgroundColor='#ffff99';
    html.style.margin='0';
    html.style.height='100%';
    html.style.fontFamily='sans-serif';
    html.style.fontSize='15px'; body.style.backgroundColor='#ffff99';
    body.style.margin='0';
    body.style.height='100%';
    body.style.fontFamily='sans-serif';
    body.style.fontSize='15px';
    bloque.style.minHeight='100%';   
    bloque.style.width='15%';
    bloque.style.backgroundColor='skyblue';
    bloque.style.display='block';
    bloque.style.float='left';
    contenido.style.float='left';
    contenido.style.paddingLeft='2%';
    temas.style.marginTop='1%';
    temas.style.fontWeight='bold';
    temas.style.border= 'outset';
    temas.style.borderWidth='2px';
    temas.style.borderColor='black';
    temas.style.backgroundColor
    ='gainsboro';
    temas.style.width='80%';
    temas.style.padding='5px';
    marco.style.border= 'outset';
    marco.style.borderWidth='2px';
    marco.style.borderColor='black';
    marco.style.backgroundColor='yellow';
    marco.style.width='80%';
    marco.style.padding='5px';
    document.getElementById('especial').style.display='block';          
}

function cambiaMinimal(){
    var html = document.getElementById('html');
    var body = document.getElementById('body');
    var bloque = document.getElementById('bloqueAzul');
    var contenido = document.getElementById('contenido');
    var temas = document.getElementById('temas');
    var marco = document.getElementById('marco');
    html.style.backgroundColor='white';
    html.style.fontFamily='serif';
    body.style.backgroundColor='white';
    body.style.fontFamily='serif';
    document.getElementById('especial').style.display='none'; 
    bloque.style.display='none';
    temas.style.border= 'none';
    temas.style.backgroundColor='white';
    marco.style.border= 'none';
    marco.style.backgroundColor='white';
    marco.style.padding='0';
}
*/

//B. Alternando las hojas CSS.

function cambiaNormal(){
    document.getElementById('hojaestilos').href = 'normal.css';
}

function cambiaMinimal(){
    document.getElementById('hojaestilos').href = 'minimalista.css';
}
