// Para seleccionar un nodo HTML hago uso del méotodo querySelector disponible en el document.

// El método querySelector recibe como parámetro un string con

// 1. Nombre de la etiqueta ||
// 2. Clase de la etiqueta ||
// 3. Id de la etiqueta 

const h1 = document.querySelector('h1'); // NODO HTML

// Por ser un nodo HTML, tengo accseso a todo el estilo.
h1.style.color = "red";
h1.style.fontFamily = "Arial, Helvética, sans-serif";

// Para seleccionar múltiples etiquetas utilizo quertSelectorAll

const allH2 = document.querySelectorAll('h2'); // [<h2>, <h2>];

// for(let h2 of allH2) {
//   h2.style.color = "blue";
// }

// allH2.forEach();
// allH2.forEach(() => {});
allH2.forEach((h2, i) => {
  if(i%2 === 0) {
    h2.style.color = "red";
  } else {
    h2.style.color = "blue";
  }
});

