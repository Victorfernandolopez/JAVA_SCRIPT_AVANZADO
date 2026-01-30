console.warn(document.querySelector('title').innerText)

//-----------------------------------------
//ejemplo 1
console.log('\n/* CallBacks*/')

var uno = () => {
    console.log('Soy la funcion 1')
}

var dos = () => {
    console.log('Soy la funcion 2')
}

uno()
dos()


function prueba(item,callback){
    console.log(item)
    //comprovacion del callback (no estricta)
    //if(callback)callback()

    //comprovacion del callback (estricta)
    if(typeof callback == 'function') callback()
}

prueba(1,uno)
prueba(2,dos)

//ejemplo 2

const suma = (a,b) => a+b
const resta = (a,b) => a-b
const mult = (a,b) => a*b
const div = (a,b) => a/b
const mod = (a,b) => a%b



function operacion(a,b,cb){
    return cb(a,b)
}

let n1 = 15, n2 = 6

console.log(`la suma de ${n1} y ${n2} da ${operacion(n1,n2,suma)}`)
console.log(`la resta de ${n1} y ${n2} da ${operacion(n1,n2,resta)}`)
console.log(`la multiplicacion de ${n1} y ${n2} da ${operacion(n1,n2,mult)}`)
console.log(`la division de ${n1} y ${n2} da ${operacion(n1,n2,div)}`)
console.log(`el modulo entre ${n1} y ${n2} da ${operacion(n1,n2,mod)}`)

console.log(`el modulo entre ${n1} y ${n2} da ${operacion(n1,n2,(a,b) => a%b)}`) //callback recibiendo un funcion flecha


//----------------------------------
//evento con callback
console.log('\n /* EVENTOS */ ')
var btn = document.getElementById('btn')
console.log(btn)

/* function click (){
    console.log("Click Me!")
} */

//btn.onclick = () => console.log("Click Me!")

//eventos con multiples callbacks

//solucion 1, callback statico
/* btn.onclick = ()=>{
    uno()
    dos()
} */

//solucion 2

btn.addEventListener('click',uno)
btn.addEventListener('click',dos)

//--------------------------------
//ejemplo de callback asincrono con setTimeout remuevo la funcion uno del evento click
/* console.warn('inicio', new Date().toLocaleTimeString()) 
setTimeout(() => {
    btn.removeEventListener('click',uno) //elimina el callback uno
    console.warn('5 segundos despues', new Date().toLocaleTimeString())
}, 5000); */


//--------------------------------
console.log('\n /* Eventos Object (e) (event) (evt)*/')

btn.addEventListener('click',(e)=>{
    console.log('evento', e)
})


//--------------------------------
console.log('\n /* Eventos con conportamiento automatico*/')
const link = document.querySelector('#link')

link.addEventListener('click',(e)=>{
    console.log('click en el link')
    e.preventDefault() //previene el comportamiento automatico del evento
    setTimeout(() => {
        console.log('Despues de 3 segundos')
        window.location.href = 'https://www.google.com' //redirecciona despues de 3 segundos
    }, 3000);
})

//--------------------------------
console.log('\n /*Propagacion de eventos (bubling y capturing)*/')

var uno = document.getElementById('uno')
var dos = document.getElementById('dos')
var tres = document.getElementById('tres')
//diferencia entre bubbling y capturing
//bubbling: el evento se propaga desde el elemento mas interno al mas externo (default)
//capturing: el evento se propaga desde el elemento mas externo al mas interno 
//false = bubbling
//true = capturing
//intercambiamos entre ambos al configurar el tercer parametro del addEventListener
tres.addEventListener('click',()=>{
    console.log('click en tres')
}/* false o true */)

dos.addEventListener('click',()=>{
    console.log('click en dos')
})
uno.addEventListener('click',()=>{
    console.log('click en uno')
})

//detener la propagacion de eventos
tres.addEventListener('click',(e)=>{
    e.stopPropagation() //detiene la propagacion del evento
})

//configurar el evento del documento web
/* document.addEventListener('click',()=>{
    console.log('click en el documento')
}) */

//--------------------------------

console.clear() /* borra la consola */

//aplicacion avanzada de propagacion de  eventos
//la idea es cuando se toque el boton estatico detectar cuando clickean el boton estatico y crear un nuevo boton aldado que se llame dinamico
var estatico = document.getElementById('estatico')
var botonCreado = false
estatico.addEventListener('click',()=>{
    console.log('click en el boton estatico')
    if(!botonCreado){
        var dinamico = document.createElement('button')
        document.body.appendChild(dinamico)
        dinamico.innerText = 'Dinamico'
        dinamico.id = 'dinamico'

        //solucion anidando callbacks
        //var dinamico = document.getElementById('dinamico')
        //console.log(dinamico)
        /* dinamico.addEventListener('click',function(){
            console.log('click en el boton dinamico')
        })
        botonCreado = true */
    }
    
})

// solucion con propagacion de eventos
document.body.addEventListener('click',function(e){
    if(e.target.id === 'dinamico'){
        console.log('click en el boton dinamico')
    }
})


//--------------------------------
console.log('\n /* manipulacion del dom con un evento del bom */ ')
window.addEventListener('resize',()=>{
    console.log(`el ancho de la ventana es ${window.innerWidth} y el alto es ${window.innerHeight}`)
})


//--------------------------------
// explicacion de setTimeout y setInterval con callbacks
console.log('\n /* setTimeout y setInterval */ ')
setTimeout(()=>{
    console.log('esto se muestra despues de 3 segundos')
},3000)

//explicacion del codigo anterior
/*
setTimeout es una funcion que recibe dos parametros:
1. una funcion callback que se ejecutara despues de un tiempo determinado
2. el tiempo en milisegundos que se espera para ejecutar la funcion callback
en este caso, despues de 3 segundos (3000 ms) se ejecuta la funcion callback que muestra un mensaje en consola
*/

let contador = 0    
const intervalo = setInterval(()=>{
    contador++
    console.log(`el contador va en ${contador}`)        
    if(contador >=5){
        clearInterval(intervalo)
        console.log('se detuvo el intervalo')
    }
},1000)

//explicacion del codigo anterior
/*
let contador = 0
const intervalo = setInterval(()=>{
    contador++
    console.log(`el contador va en ${contador}`)
},1000)
//cada segundo se ejecuta la funcion anonima que incrementa el contador y lo muestra en consola
//para detener el intervalo usamos clearInterval(intervalo) cuando el contador llega a 5
*/




