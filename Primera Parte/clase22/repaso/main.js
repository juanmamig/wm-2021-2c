/**
 * Tenemos un usuario y una constraseña guardadas en constates.
 * Le pedimos al usuario que ingrese usuario y contraseña
 * Si el usuario es incorrecto, le muestro un cartel de usuario incorrecto
 * Si la contraseña es incorrecta, le muestro un cartel de contraseña incorrecta
 * Si todo va bien, le muestro un cartel que permita el logueo.
 */


const dbUser = "felipe23";
const dbPass = 123456;

let user = prompt("Ingrese su usuario");

if(user === dbUser) {
  let pass = prompt("Ingrese su contraseña");
  if(pass == dbPass) {
    console.log("Puede pasar");
  } else {
    console.log("Clave Incorrecta");
  }
} else {
  console.log("Usuario Incorrecto");
}
