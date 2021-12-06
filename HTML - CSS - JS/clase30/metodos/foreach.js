const numeros = [1,2,3,4];

// Si quiero iterar por el array, antes usara un bucle for. Ahora, puedo usar un método forEach

// 1. El nombre del array
// 2. El método forEach
// 3. El callback del método (puede o no ser anónimo)
// 4. El parámetro de la función callback
// 5. La lógica que necesite


// elemento = numeros[i];

// const callback = function(elemento){ console.log(elemento); }

// numeros.forEach(function(elemento){
//   console.log(elemento);
// });

// numeros.forEach(callback);

// Si le pasás una función a un forEach, y esta función recibe 3 parámetros, va a pasar lo siguiente:

// 1. El primer parámetro, sin importar como se llame, va a ser cada elemento de la iteración (arreglo[i])

// El segundo parámetro, sin importar como se llame, va a ser el índice, es decir el número de cada vuelta.

// El tercer parámetro, sin importar como se llame, va a ser el array que está siendo iterado.

numeros.forEach(function(a,b,c){
  console.log(`Elemento ${a}`);
  console.log(`Índice ${b}`);
  console.log(`Array siendo iterado ${c}`);
});
