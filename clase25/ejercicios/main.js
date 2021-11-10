// Ejercicio Números Pares
for(let i = 10; i <= 20; i+=2) {
  console.log(i);
}

for(let i = 10; i <= 20; i++) {
  if(i%2 === 0) {
    console.log(i);
  }
}

// Ejercicio ¿Dónde está Wally II?
const nombres = ["Juan", "Pedro", "Wally", "Sofía", "Amelia", "Wally", "Juan", "Pedro", "Wally", "Sofía", "Amelia", "Wally"];

for(let i = 0; i < nombres.length; i++) {
  if(nombres[i] === "Wally") {
    console.log(nombres[i] + "Está en el índice " + i);
  }
}

// Ejercicio Números Pares
const nums = [13, 41, 23, 22, 44, 55, 66];

for(let i = 0; i < nums.length; i++) {
  if(nums[i]%2 === 0) {
    // console.log("El número " + nums[i] + " es par");
    console.log(`El número ${nums[i]} es par`); //backticks ${}
  }
}

// Ejercicio suma de valores
const nums2 = [13, 41, 23, 22, 44, 55, 66];
let suma = 0;

for(let i = 0; i < nums2.length; i++) {
  // suma = suma + nums2[i];
  suma += nums2[i];
}

console.log(`La suma total es: ${suma}`);



// Ejercicio Integrador - Cantidad de caracteres
const lugares = ["San Carlos de Bariloche", "Provincia de Mendoza", "Salta", "Jujuy", "San Miguel de Tucumán", "Sierra de la ventana"];

for(let i = 0; i < lugares.length; i++) {
  if(lugares[i].length > 20) {
    console.error(`El destino "${lugares[i]}" tiene más de 20 caracteres`);
  }
}