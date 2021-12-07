let actividadesSeleccionadas;

const actividades = document.querySelectorAll('.product');
const resumenBtn = document.querySelector('.resumen');
const number = document.querySelector('.number');

actividades.forEach((actividad) => {
  actividad.addEventListener('click', (infoEvent) => {
    infoEvent.currentTarget.classList.toggle('seleccionada');
    number.textContent = document.querySelectorAll('.seleccionada').length;
  });
});

resumenBtn.addEventListener('click', () => {
  actividadesSeleccionadas = document.querySelectorAll('.seleccionada');
  actividadesSeleccionadas.forEach((actividad) => {
    console.log(actividad.dataset.activity);
  });
});




