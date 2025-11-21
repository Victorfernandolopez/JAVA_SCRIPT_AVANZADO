/* Crea una función operaciones(a, b) que contenga dentro otra función llamada sumar() y otra restar().
Que operaciones() devuelva un objeto con ambas operaciones ya calculadas. */

const operaciones = (a,b) => {
    const sumar = () => a + b
    const restar = () => a - b
    return {suma: sumar(), resta: restar()}
}
console.log(operaciones(10,5)) // {suma: 15, resta: 5}

/* Crea una función llamada calculadora(a, b) que contenga dentro otras tres funciones:

sumar() → retorna la suma de a + b

multiplicar() → retorna el producto de a * b

promedio() → usa las dos funciones anteriores para devolver el promedio de la suma y el producto.

La función principal calculadora() debe retornar un objeto con los tres resultados: */
const calculadora = (a,b) =>{
    sumar3 = () => a+b
    restar3 = () => a-b
    mult3 = () => a*b
    div3 = () => a/b
    return {suma: sumar3(), resta: restar3(), multiplicacion: mult3(), division: div3()}
}

console.log(calculadora(10,5))