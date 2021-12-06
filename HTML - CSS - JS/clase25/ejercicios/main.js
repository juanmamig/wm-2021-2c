// // Ejercicio Números Pares
// for(let i = 10; i <= 20; i+=2) {
//   console.log(i);
// }

// for(let i = 10; i <= 20; i++) {
//   if(i%2 === 0) {
//     console.log(i);
//   }
// }

// // Ejercicio ¿Dónde está Wally II?
// const nombres = ["Juan", "Pedro", "Wally", "Sofía", "Amelia", "Wally", "Juan", "Pedro", "Wally", "Sofía", "Amelia", "Wally"];

// for(let i = 0; i < nombres.length; i++) {
//   if(nombres[i] === "Wally") {
//     console.log(nombres[i] + "Está en el índice " + i);
//   }
// }

// // Ejercicio Números Pares
// const nums = [13, 41, 23, 22, 44, 55, 66];

// for(let i = 0; i < nums.length; i++) {
//   if(nums[i]%2 === 0) {
//     // console.log("El número " + nums[i] + " es par");
//     console.log(`El número ${nums[i]} es par`); //backticks ${}
//   }
// }

// Ejercicio suma de valores
// const nums2 = [13, "41", 23, 22, 44, 55, 66];
// let suma = 0;

// for(let i = 0; i < nums2.length; i++) {
//   // suma = suma + nums2[i];
//   suma += nums2[i];
// }


// console.log(`La suma total es: ${suma}`);



// // Ejercicio Integrador - Cantidad de caracteres
// const lugares = ["San Carlos de Bariloche", "Provincia de Mendoza", "Salta", "Jujuy", "San Miguel de Tucumán", "Sierra de la ventana"];

// for(let i = 0; i < lugares.length; i++) {
//   if(lugares[i].length > 20) {
//     console.error(`El destino "${lugares[i]}" tiene más de 20 caracteres`);
//   }
// }


// // Ejercicio Integrador - Cuarentena y descuentos

// const productos = ["Zanahoria 1kg", "Berenjena 1kg", "Salsa de Soja 500ml"];
// const precio = [220, 190, 245];

// let precioFinal = 0;
// for(let i = 0; i < productos.length; i++) {
//   console.log(`El precio de ${productos[i]} es $${precio[i]}`);
//   precioFinal += precio[i];
// }

// console.log(`El precio final es: ${precioFinal}`);

// const dto = prompt("Ingrese el voucher");
// if (dto === "DTO20") {
//   precioFinal = precioFinal - (precioFinal*20/100);
// } else if(dto === "DTO15") {
//   precioFinal = precioFinal - (precioFinal*15/100);
// } else if (dto === "DTO10") {
//   precioFinal = precioFinal - (precioFinal*10/100);
// }else {
//   console.log("El código no es válido");
// }


// Ejercicio integrador - Salón de Fiestas

// const invitadxs = ["Juan Perez", "Jorgelina Birtia"];
// const personasEnSalon = [];
// const accion = prompt("¿Qué desea hacer?");

// if(accion === "ingresar") {
//   const user = prompt("Ingrese el nombre de la persona a ingresar");
//   const index = invitadxs.indexOf(user);
//   if(index >= 0) {
//     personasEnSalon.push(user);
//     alert(`${user} ha ingresado al salón`);
//   } else {
//     alert("Esta persona no está en la lista");
//   }
// } else if (accion === "retirar") {
//   const user = prompt("Ingrese el nombre de la persona a retirar");
//   const index = personasEnSalon.indexOf(user);
//   if(index >= 0) {
//     personasEnSalon.splice(index,1);
//     alert(`${user} se ha retirado del salón`);
//   } else {
//     alert("Esta persona no está en el salón");
//   }
// } else {
//   console.log("Esa acción no está permitida");
// }

const db = ["Tengo 18 años", 23, "18 años", "20 años y 30 días", "21 años y un poco más", "27 años y medio", "estoy llegando a los 18, me faltan unos meses", "Tengo 17 pero en unos días cumplo 18"];

const newDb = [];

for (let i = 0; i < db.length; i++) {

  let n = "";  

  // Quick fix for numbers
  if(typeof db[i] === "number") {
    newDb.push(db[i]);
  } else {
    // For loop for characters
    for(let j = 0; j < db[i].length; j++) {
      let char = parseInt(db[i][j]);
      if(typeof char === 'number' && !Number.isNaN(char)) {
        if(n.length < 2) {
          n += char;
        }
      }
    }
    newDb.push(parseInt(n));
  }
}

console.log(newDb);