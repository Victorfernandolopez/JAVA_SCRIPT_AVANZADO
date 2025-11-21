/* Diferencia entre var y let:
Crea un script que:

Declare una variable x con var dentro de un for.

Declare una variable y con let dentro de otro for.

Intenta mostrar ambas fuera del bucle.
👉 Objetivo: entender cuál es accesible fuera y cuál no. */

for (var x = 0; x < 5; x++) {
    console.log("Dentro del for con var, x =", x)
}
console.log("Fuera del for con var, x =", x)
// La variable x es accesible fuera del for, ya que var tiene un alcance de función o global.

for (let y = 0; y < 5; y++) {
    console.log("Dentro del for con let, y =", y)
}
//console.log("Fuera del for con let, y =", y) esta linea da error
// La variable y no es accesible fuera del for, ya que let tiene un alcance de bloque.