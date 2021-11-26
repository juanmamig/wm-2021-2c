// Defino una función.

// 1. Se declara un nombre de variable de forma automática. Es decir que no puedo crear una variable con el mismo nombre que una función.

// 2. Existe un término llamado hoisting que, entre otras cosas, significa que las funciones declaradas de esta forma, van a estar disponibles para ser usadas en nuestro progama. Es decir que podemos llamarlas primero y definirlas después.
function saludarAmigosYAmigas(){
  console.log("Hola, Juan");
  console.log("Hola, Pedro");
  console.log("Hola, Sofía");
}

// Ejecuto la función
saludarAmigosYAmigas();

// NO SE PUEDE CREAR UNA VARIABLE CON EL MISMO NOMBRE DE UNA FUNCIÓN YA DECLARADA
// let saludarAmigosYAmigas = 20;
// console.log(saludarAmigosYAmigas);
