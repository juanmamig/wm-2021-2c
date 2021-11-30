const productos = document.querySelectorAll('.product');

const links = document.querySelectorAll('a'); // [<a>, <a>]
// const experimento = document.querySelectorAll('[data-category="tec"]');

const ocultarProductos = (categoria = '') => {
    productos.forEach((el) => {
        console.log(el.dataset);
        if (!el.dataset.category.includes(categoria)) {
            el.classList.add('hidden')
        } else {
            el.classList.remove('hidden')
        }
    })
}

// Recorremos todos los links y le agregamos un evento de click. Luego, nos guardamos el data-category del link clickeado. Finalmente oculto los productos
links.forEach(elemento => {
    elemento.addEventListener('click', (infoEvent) => {
        const categoria = infoEvent.target.dataset.category; // hogar || tec
        ocultarProductos(categoria);
    });
});