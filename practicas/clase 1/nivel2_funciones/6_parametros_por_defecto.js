/* Crea una función saludoPersonalizado(nombre = "invitado") que devuelva
"Hola [nombre], gracias por visitar el sitio!"
Prueba llamarla con y sin argumento. */

const saludoPersonalizado = (nombre = "invitado") => `Hola ${nombre}, gracias por visitar el sitio!`

console.log(saludoPersonalizado("Carlos"))
console.log(saludoPersonalizado())