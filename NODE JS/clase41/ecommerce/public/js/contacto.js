// Selecciono el formulario
const form = document.querySelector('form');

// Escucho cuando alguien le da a "enviar"
form.addEventListener('submit', (eventInfo) => {
  // Evito que se refresque la página
  eventInfo.preventDefault();
  
  // 1. Recolectar los datos que completó el usuario
  // FormData es una clase a la cual si le pasamos un formulario, va a tener acceso a la info del form.
  const formData = new FormData(form);
  
  // 2. Transformarlo a JSON
  const formDataJson = Object.fromEntries(formData);
  console.log(formDataJson);
  // La ruta en la cual nuestro servidor va a escuchar consultas post
  const url = "http://localhost:3000/consulta";

  // Vamos a hacer una consulta http al servidor, usando el método post, y le vamos a mandar en el body la data del formulario

  const handleError = response => {
    if(!res.ok) throw Error('Error');
    return response.json();
  }

  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(formDataJson),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    // Si las respuestas NO están en el rango de 200 y 299
    if(!res.ok) {
      throw Error("Error");
    }
    return res.json();
  })
  .then(dataJSON => {
    // document.querySelector('body').innerText = "Éxito!";
    console.log(dataJSON);
  })
  .catch(error => {
    // document.querySelector('body').innerText = "Error!";
    console.log(error);
    // mostrarLogueoErroneo(); // DOM
  });

});
