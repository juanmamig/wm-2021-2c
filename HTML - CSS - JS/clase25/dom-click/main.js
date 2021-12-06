// BREVE INTRO A DOCUMENT

/* 1. 
HTML tiene su representación en JavaScript a través de un objeto que se llama document. 

"HTML está asociado con JS"

En otras palabra: Si quiero acceder al HTML mediante JS, lo tengo que hacer mediante el objeto document.

El objeto document guarda todos los elementos del HTML
*/

// console.dir(document);


// SELECCIÓN DE ELEMENTOS

// Para seleccionar un elemento del HTML, primero lo vamos a guardar en una varible

let button;

// Existe una función dentro del objeto document, que se llama querySelector, y lo que hace esto es buscar a los children que necesitamos. 

// Pasamos el nombre del elemento HTML que necestiamosdentro de los paréntesis y como un string.

button = document.querySelector('button');

// querySelector trae solo la primer coincidencia. Si hay dos, solo va a traer el primero


// EVENTOS

// Los eventos nos permiten escuchar qué es lo que hace el usuario, por ejemplo si hace click en la web, o si hace scroll, o si escribe, etc, etc, etc.

// Se dice que le podemos agregar eventos a los elementos, como por ejemplo si yo quiero saber cuando un botón fue clickeado.

// 1. Le agrego la función addEventListener al nodo HTML.

// 2. Cuando agrgeamos un eventListener, siempre tenemos que especificar el tipo de evento a escuchar
// click
// mouseover
// mouseleave
// keydown

// Se pasa como string el nombre del evento

// 3. Ejecutar una función con lo que quiero que pase

// button.addEventListener('click', function(){
//   alert("Me hicieron click");
// });


// AGREGAR O QUITAR CLASES

let h2 = document.querySelector('h2');

button.addEventListener('click', function(){
  // h2.classList.add('visible');
  // h2.classList.remove('visible');
  h2.classList.toggle('visible');
});
