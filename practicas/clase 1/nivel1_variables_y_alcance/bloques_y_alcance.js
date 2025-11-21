/* Bloques y alcance:
Dentro de un bloque { ... }, declara una variable con let y otra con var.
Luego intenta imprimirlas fuera del bloque.
👉 Explica en un comentario por qué una da error y la otra no. */
{
    let a = 10;
    var b = 20;
    console.log("Dentro del bloque: a =", a);
    console.log("Dentro del bloque: b =", b);
}
//console.log("Fuera del bloque: a =", a); // da error porque a no existe fuera del bloque al utilizar let
console.log("Fuera del bloque: b =", b); // no da error porque b existe fuera del bloque al utilizar var