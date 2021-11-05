let edad = 29
const nombre = "Juan"
let dia = "Lunes"

if (edad > 30 && nombre == "Juan") {
  console.log("Tiene Dto del 20%")
}

if (edad > 30 || nombre == "Juan") {
  console.log("Tiene Dto del 20%")
}

//Distinto
if(dia != "Viernes") {
  console.log("No es viernes")
} else {
  console.log("Ya es viernes")
}

const nombre2 = "";
if(!nombre2) {
  console.log("Ingrese su nombre");
}

// Reducción a si la condición es true o false

// False
if (false) {
  console.log("Funciona #1")
}

// True
if(true) {
  console.log("Funciona #2")
}

// True
if(44) {
  console.log("Funciona #3")
}

// True
if(-1) {
  console.log("Funciona #4")
}

// False
if(0) {
  console.log("Funciona #5")
}

// 0 => false, Num => true

// True
if("hola") {
  console.log("Funciona #6")
}

// False
// String vacío
if("") {
  console.log("Funciona #7")
}
