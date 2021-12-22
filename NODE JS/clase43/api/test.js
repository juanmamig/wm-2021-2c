const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <form>
    <label>
      Nombre de Producto
      <input type="text" name="name">
    </label>
    <label>
      Precio
      <input type="number" name="price">
    </label>

    <input type="submit">
  </form>

  <script>
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formDataJson = Object.fromEntries(formData);// {name: value, price: value}

      const url = 'http://localhost:3000/product';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(formDataJson),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  </script>

</body>
</html>
`;

module.exports = page;