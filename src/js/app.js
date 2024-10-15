const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

// Función para cargar productos
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <p class="producto-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
}

// Función para manejar los botones de categorías
function agregarEventoCategorias(productos) {
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");

            if (e.currentTarget.id != "todos") {
                const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosFiltrados);
            } else {
                cargarProductos(productos);
            }
        });
    });
}

// Llamada a fetch para cargar productos desde el archivo JSON
fetch('./public/productos.json')
    .then(response => response.json())
    .then(data => {
        cargarProductos(data.productos); // Cargar productos
        agregarEventoCategorias(data.productos); // Agregar eventos a los botones de categoría
    })
    .catch(error => console.error('Error al cargar los productos:', error));
