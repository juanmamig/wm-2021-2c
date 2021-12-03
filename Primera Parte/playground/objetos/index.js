const nombre = "Juan";

const objeto = {
  prop1: "String",
  prop2: 25,
  prop3: this.prop1,
  prop4: console.log("Funciones"),
  prop5: nombre
}

JSON.stringify(objeto);
console.log(objeto);