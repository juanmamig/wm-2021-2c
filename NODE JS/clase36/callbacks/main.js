// Una Web me da una función y me devuelve el cima, pero tarda.

const httpsWebConsultarClima = (ejecutoCuandoEste) => {
  setTimeout(() => {
     const clima =  {
      temp: 26,
    }
    ejecutoCuandoEste(clima);
  }, 3000);
}

// En mi programa quiero usar esa funcionalidad y ver el clima.

httpsWebConsultarClima(function(clima){
  console.log(clima);
});