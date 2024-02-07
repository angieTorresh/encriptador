function mostrar() {
    if (event.code == 'Backspace' || event.code == 'Space') {
       asignarTexto('h2', '');
       let resultado = document.getElementById('resultado');
       let mensaje = document.getElementById('mensajeInicial');
       let copiar = document.getElementById('copiar');
       resultado.style.display = 'none';
       mensaje.style.display = 'initial'; 
       copiar.style.display = 'none';  
    }
    
}

function ocultar() {
    let mensaje = document.getElementById('mensajeInicial');
    let copiar = document.getElementById('copiar')
    mensaje.style.display = 'none';
    copiar.style.display = '';
}

function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function encriptar() {
    let fraseDesencriptada = document.getElementById('entradaUsuario').value;
    div = document.getElementById('resultado');
    div.style.display = '';
    let listaDesencriptada =  fraseDesencriptada.split(' ');
    let listaEncriptada = [];
    let encriptacion = '';
    for (palabraIndice in listaDesencriptada) {
        let  palabraDesencriptada = listaDesencriptada[palabraIndice];
        let palabraEncriptada = [];
        for  (letraIndice in palabraDesencriptada) {
            if (palabraDesencriptada[letraIndice] == 'e') {
                palabraEncriptada.push('enter');
            } else if (palabraDesencriptada[letraIndice] == 'i') {
                palabraEncriptada.push('imes');
            } else if (palabraDesencriptada[letraIndice] == 'a') {
                palabraEncriptada.push('ai');
            } else if (palabraDesencriptada[letraIndice] == 'o') {
                palabraEncriptada.push('ober');
            } else if (palabraDesencriptada[letraIndice] == 'u') {
                palabraEncriptada.push('ufat');
            } else { 
                palabraEncriptada.push(palabraDesencriptada[letraIndice]);
            } 
        } 
        listaEncriptada.push(palabraEncriptada.join(''));
    } encriptacion =  listaEncriptada.join(' ');
    ocultar();
    asignarTexto('h2', encriptacion);
}

function desencriptar() {
    let fraseEncriptada = document.getElementById('entradaUsuario').value;
    div = document.getElementById('resultado');
    div.style.display = '';
    let listaEncriptada =  fraseEncriptada.split(' ');
    let listaDesencriptada = [];
    let desencriptacion = '';
    for (palabraIndice in listaEncriptada) {
        let  palabraEncriptada = listaEncriptada[palabraIndice];
        let palabraDesencriptada = [];
        let letraIndice = 0;
        while  (letraIndice <= palabraEncriptada.length) {
            if (palabraEncriptada[letraIndice] == 'e') {
                palabraDesencriptada.push('e');
                letraIndice += 5;
                continue;
            } else if (palabraEncriptada[letraIndice] == 'i') {
                palabraDesencriptada.push('i');
                letraIndice += 4;
                continue;
            } else if (palabraEncriptada[letraIndice] == 'a') {
                palabraDesencriptada.push('a');
                letraIndice += 2;
                continue;
            } else if (palabraEncriptada[letraIndice] == 'o') {
                palabraDesencriptada.push('o');
                letraIndice += 4;
                continue;
            } else if (palabraEncriptada[letraIndice] == 'u') {
                palabraDesencriptada.push('u');
                letraIndice += 4;
                continue;
            } else { 
                palabraDesencriptada.push(palabraEncriptada[letraIndice]);
                letraIndice++;
            } 
        } listaDesencriptada.push(palabraDesencriptada.join(''));
    } desencriptacion =  listaDesencriptada.join(' ');
    ocultar();
    asignarTexto('h2', desencriptacion);
}

function copiar() {
    let texto = document.getElementById('resultado').textContent.trim();
    navigator.clipboard.writeText(texto);
}

let entrada = document.getElementById('entradaUsuario');
document.addEventListener('keydown', mostrar, false)

