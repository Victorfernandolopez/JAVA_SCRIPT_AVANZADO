/* Función anónima almacenada en variable:
Define una variable multiplicar que guarde una función anónima que multiplique dos números.
Luego muestra el resultado de multiplicar 7 × 6. */

//creacion de la funcion anonima, como solo tiene un argumento en el cuerpo de la funcion no van llaves
const multiplicar = (a,b) => a*b

//llamado de la funcion anonima
console.log(`la multiplicacionde 7*6 es: ${multiplicar(7,6)}`)

//funcion anonima sin argumentos
const saludar2 = () => "hola, bienvenido"

console.log(saludar2())

