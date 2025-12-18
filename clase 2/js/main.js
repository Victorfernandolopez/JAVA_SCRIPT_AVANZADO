// Acceso al BOM
console.log(window.innerHeight);
console.log(innerWidth);

console.log(outerHeight);
console.log(outerWidth);

// Acceso al DOM
console.log(window.document.getElementById("titulo"));
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("subtitulo"));

// Acceso al Dom (metodos mas modernos)
console.log(document.querySelector("#titulo"));
console.log(document.querySelector("h1"));
console.log(document.querySelectorAll(".subtitulo"));

console.log(document.querySelector('.titulo'));
console.log(document.querySelectorAll('.titulo'));

//manipulacion de elementos del DOM
var titulo = document.getElementById("titulo");
titulo.innerText += ' - como estan?';

//acceso avanzado al Dom
var p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

var body = document.getElementsByTagName('body')[0];
console.log(body);
body.appendChild(p);

var a = document.createElement('a');
a.innerText = 'Ir a Google';
a.href = 'https://www.google.com';
body.appendChild(a);