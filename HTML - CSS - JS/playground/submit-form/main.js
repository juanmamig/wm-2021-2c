const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);

  const name = formData.get('usuario');
  const pass = formData.get('pass');
  console.log(name, pass);

  for (let key of formData.keys()) {
    console.log(key);
  }

  for (let values of formData.values()) {
    console.log(values);
  }

  for(let pair of formData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]);
 }
  
});




// The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values