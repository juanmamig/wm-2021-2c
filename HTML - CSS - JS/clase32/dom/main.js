// ¿Qué es el DOM? => Nos permite traer y modificar NODOS HTML
// ¿Como? => document.querySelector
const h1 = document.querySelector('h1');

// ¿Que se puede hacer con un nodo HTML en JS? => Estilar, Agregar clases, Agregar eventos, y mucho más

// Cambiar estilo
h1.style.color = "red";
// setProperty(propiedad, valor, jqerarquía);
h1.style.setProperty('color', 'red', 'important');

// Crear nodos HTML
const div = document.createElement('div');
div.classList.add('product');

const h2 = document.createElement('h2');
h2.textContent = "Reloj Digital";
div.appendChild(h2);

const contenedorFlex = document.querySelector('.contenedor-flex');
contenedorFlex.appendChild(div);


