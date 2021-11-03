const nombres = ["Agustín", "Rodrigo", "Andrea", "Agustín", "Iván", "María"];
//                  0           1          2          3        4       5

console.log("Hola " + nombres[1]); // Hola Rodrigo
console.log(nombres[10]); // Undefined
console.log(nombres[-2]); // Undefined
console.log(nombres["Rodrigo"]); // Undefined

nombres[6] = "Eric";
nombres[10] = "Emmanuel"; // [0,6] (definido) - [7,9] (Se rerevan) - [10] (definido);

nombres[-2] = "Juan Pablo";
nombres["Rodrigo"] = 20;

console.log(nombres[-2]);
console.log(nombres["Rodrigo"]);

console.log(nombres);
console.log(nombres.length); // Me devuelve la cantidad de elementos que tiene un array. Es un número

// To be continued...