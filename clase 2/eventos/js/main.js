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
        botonCreado = true
    }
    
})


//evento para el boton dinamico utilizando el uso de la propagacion de eventos
document.body.addEventListener('click',(e)=>{
    if(e.target && e.target.id == 'dinamico'){
        console.log('click en el boton dinamico')
    }
})
//explicacion: al hacer click en el boton estatico se crea un nuevo boton dinamico, pero el evento del boton dinamico se maneja desde el body del documento, gracias a la propagacion de eventos podemos detectar cuando se hace click en el boton dinamico sin necesidad de asignar un evento directamente a el.
//esto lo acemos a traves de la propiedad target del objeto evento, que nos indica el elemento exacto donde se origino el evento.
//de esta forma podemos manejar eventos en elementos que no existen en el momento de asignar el evento, lo cual es muy util en aplicaciones dinamicas donde los elementos se crean y eliminan constantemente.