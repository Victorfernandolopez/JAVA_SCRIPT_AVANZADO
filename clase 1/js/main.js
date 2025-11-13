console.log("bienvenidos al curso de javascript avanzado")
console.warn("bienvenidos al curso de javascript avanzado")
console.error("bienvenidos al curso de javascript avanzado")

/* --------------------------------------------------------- */
/* Nuevos constructores de variables en ECMAScript 6 */
/* --------------------------------------------------------- */

console.log("\n/* js5 -var */")
var numero1 = 10
console.log("numero1:", numero1)

var PI = 3.241592
console.log("PI:", PI)

for(var i=0; i<5; i++){
    console.log("i:", i)
}

//--------------------------------------------------------- */
console.log("\n/* js6 - let y const */")
let numero2 = 20
console.log("numero2:", numero2)

const GRAVEDAD = 9.81
console.log("GRAVEDAD:", GRAVEDAD)
for(let j=0; j<5; j++){
    console.log("j:", j)
}

/* --------------------------------------------------------- */
console.log("\n/* Funcion de var / let y const en distintos bloques de codigo */")
/* bloque de codigo anonimo */
{
    //var a = 5
    let a = 5
    console.log("a:", a)
}
//console.log("a fuera del bloque:", a) // da error porque a no existe fuera del bloque al utilizar let
/* bloque de codigo condicional */
if(true){
    //var b = 10
    let b = 10
    console.log("b:", b)
}
//console.log("b fuera del if:", b) // da error porque b no existe fuera del if al utilizar let
/* bloque de codigo funcional */
function miFuncion(){
    var c = 15
    console.log("c:", c)
}
miFuncion()
//console.log("c fuera de la funcion:", c) // da error porque c no existe fuera de la funcion

/* --------------------------------------------------------- */
/* Nuevos constructores de funciones en ECMAScript 6 */
/* --------------------------------------------------------- */

console.log("\n/* js5 - funciones*/")

function sumar(a, b){
    return a + b
}
console.log("funcion anonima almacenada en una variable")

var sumar2 = function(a, b){
    return a + b
}
//concatenacion de strings
console.log("suma de 5 + 10 =", sumar(5, 10))

/* ----------------------------------------------------------- */
console.log("template strings - plantillas de texto")
let nombre = "Juan"
let apellido = "Perez"
let edad = 30
//concatenacion tradicional
console.log("Hola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.")
//template strings
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`) 
/* ----------------------------------------------------------- */
console.log("\n/* js6 - funciones flecha */")
//funcion flecha
const sumar3 = (a, b) => {
    return a + b
}
console.log("suma de 15 + 25 =", sumar3(15, 25))

const getaleatorio1al10 = () => {
    var random = Math.random()
    ramdom = random * 10
    random = parseInt(random)
    random++
    return random
}

console.log("numero aleatorio entre 1 y 10:", getaleatorio1al10())

/* funcion flecha simplificada */
const getaleatorio1al10_v2 = () => parseInt(Math.random() * 10) + 1

console.log("numero aleatorio entre 1 y 10 v2:", getaleatorio1al10_v2())
/* funcion flecha que retorna un objeto */

const getpersona = (nombre, apellido, edad) => ({nombre: nombre, apellido: apellido, edad: edad})

console.log("persona:", getpersona("Ana", "Gomez", 25))

/* --------------------------------------------------------- */
/* Bom: browser object model -> window */
/* Dom: document object model -> document */
/* --------------------------------------------------------- */

//acceder al objeto window
console.log("\n/* BOM - window */")
console.log("alto de la ventana:", window.innerHeight)
console.log("ancho de la ventana:", window.innerWidth)
console.log("URL de la pagina:", window.location.href)

//acceder al objeto document
console.log("\n/* DOM - document */")
//acceder a elementos del DOM
console.log(window.document.getElementById("titulo"))
//acceder a elementos del DOM por su clase
console.log(window.document.getElementsByClassName("titulo"))
//acceder a elementos del DOM por su etiqueta
console.log(window.document.getElementsByTagName("h1"))
//acceder a elementos del DOM por un selector CSS
console.log(window.document.querySelectorAll(".titulo"))

// acceso al dom  (metodos mas modernos (queryselector))
console.log("\n/* DOM - document (metodos modernos) */")
//acceder a un elemento del DOM por su id
console.log(document.querySelector("#titulo"))
//acceder a elementos del DOM por su clase
console.log(document.querySelectorAll(".titulo"))
//acceder a elementos del DOM por su etiqueta
console.log(document.querySelectorAll("h1"))