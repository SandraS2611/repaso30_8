console.log("Hola Mundo");

function hola (name) { console.log("Hola", name)}

hola("Sandra")

//no funcionan en Node
//alert("Hola mundo cruel")
//prompt("holis")


//IMPORT NODE necesita de REQUIRE 
//DESESTRUCTURA
const { suma, resta, mult, div } = require('./math')

console.log(suma(1, 2));
console.log(resta(3, 2));
console.log(mult(3, 3));
console.log(div(10, 2));