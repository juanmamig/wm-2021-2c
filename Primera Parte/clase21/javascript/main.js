let edad = parseInt(propmt("Ingrese su edad"), 10);
/* Operadores de comparación */
// Podemos preguntar si algo es:

// == (igual)
// > (mayor)
// < (menor)
// >= (mayor igual)
// <= (menor igual)
// != (distinto)

// Entrada a un bar
// if(edad >= 18){
//   console.log("Puede pasar");
// } else {
//   console.log("No puede pasar");
// }
// Fallback


// Entrada a un bar: Condición 1, >18, condición 2 tiene un cópdigo VIP. Si tiene el codigo "VIP" pasa a un salón vip, sino pasa a un salón regular.

if(edad >= 18){
  let codigo = prompt("Ingrese el codigo");
  if(codigo == "VIP") {
    console.log("Puede ingresar al salón VIP");
  } else {
    console.log("Puede pasar al salón regular");
  }
} else {
  console.log("No puede pasar");
}