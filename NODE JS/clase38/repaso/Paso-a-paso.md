# Paso a Paso EJS

## Crear un servidor

01. Creo una carpeta y un app.js
02. Ejecuto `npm init`
03. Instalamos `express` (paquete de 3ros) con `npm i express`
04. Importo express con un require();
05. Lo inicio con un método .listen.

## Como hago para que el servidor responda al cliente
01. Creamos una ruta utilizando el app.get() que recibe dos parámetros.
- Nombre de la página
- Función callback que a su vez recibe dos parámetros que son el req y el res.

### ¿Para que usamos el res?
Para responderle al cliente.

### ¿Para que usamos el req?
Para escuchar qué me dice el cliente. El cliente me puede pasar más data y con el req puedo recibirla.

## Que el servidor devuelva página dinámica

01. Instalamos `ejs` con `npm i ejs`
02. Le indico a express en qué carpeta vamos a guardar la páginas. Nosotros usamos la carepta `views`. Para obtener la ruta, uso el paquete path en conjunto con la constante __dirname;
03. Le digo a express que use como motor a `ejs`

## ¿Cómo hago para enviarle al cliente archivos estáticos? HTML, CSS, y el JS
01. Me creo una carpeta public que va a tener todos los archivos que necesita el cliente. EL HTML me lo va a armar express a partir del ejs. Va a agarrar el EJS y lo va a transforma en HTML

02. Creamos carpetas de css, js e img o lo que necesite que público.
03. Le indicamos a express 
  - Dónde están los archivos públicos
  - Le digo a express que voy a usar archivos estáticos para enviarle al cliente.

# LA CARPETA PUBLIC SE VA A EJECUTAR DEL LADO DEL CLIENTE