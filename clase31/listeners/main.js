// 1. Seleccino el botón y lo guardo en una variable
const darkBtn = document.querySelector('.dark-btn');
const body = document.querySelector('body');

console.log(body.dataset.category);

// 2. Le doy un listener al botón para que escuche cuando el usuario le hace click. Luego, ejecuto el callback
darkBtn.addEventListener('click', (infoEvent) => {
  console.log(infoEvent.target); // El target es el elemento que recibió el evento.

  console.log(infoEvent.target.dataset.category); // style
  body.classList.toggle('dark');
});