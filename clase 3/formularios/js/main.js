console.warn(document.querySelector("title").textContent);


/* eventos en formularios */



/* 1 evento de click de suboton interno */
/* const btn = document.getElementById('btn') // selecciono el boton
btn.addEventListener('click', e => { // agrego el evento click
    e.preventDefault(); // prevengo el comportamiento por defecto del boton
    console.log('diste click en el boton');
}); */


/* 2 evento de submit del formulario*/
/* const formulario = document.getElementById('formulario') // selecciono el formulario
formulario.addEventListener('submit', e => { // agrego el evento submit
    e.preventDefault(); // prevengo el comportamiento por defecto del formulario

    console.log('submit', input.value); // muestro en consola el valor del input
}); */

/* 3 validacion de formularios a traves de JavaScript (utilizando carteles de html5 y js)*/
const form = document.querySelector('#formulario') // selecciono el formulario
const input = document.querySelector('input') // selecciono el input

function setCustomValidity(mensaje){ // funcion para setear el mensaje de error en el input
    const div = document.querySelector('div'); // selecciono el div
    div.innerText = mensaje; // seteo el mensaje de error en el div
    div.style.display = mensaje ? 'block' : 'none'; // si hay mensaje lo muestro, si no lo oculto
}

function validarInput(valor) { // funcion para validar el input
    valor = valor.trim(); // elimino los espacios en blanco al inicio y al final



    const lg = valor.length; // obtengo la longitud del valor del input
    if(lg == 0){
        mensaje = 'El campo no puede estar vacio'; // mensaje de error
        console.error(mensaje)
        setCustomValidity(mensaje); // seteo el mensaje de error en el input
        return null; // si el valor es 0 retorno null
    }
    valor = encodeURIComponent(valor); // codifico el valor del input para evitar inyecciones de codigo
    setCustomValidity(''); // limpio el mensaje de error
    return valor; // retorno el valor del input
}

input.addEventListener('input', () => { // agrego el evento input

});

formulario.addEventListener('submit', e => { // agrego el evento submit
    e.preventDefault(); // prevengo el comportamiento por defecto del formulario

    let valor = validarInput(input.value); // obtengo el valor del input

    if(valor){
        console.log('valor ingresado', input.value); // muestro en consola el valor del input
    }
});

// expreciones regulares para validaciones mas complejas





