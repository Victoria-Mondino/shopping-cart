// PRODUCTOS
const productos = [
    // burger
    {
        id: "burger-01",
        titulo: "Raging Bull",
        imagen: "../public/img/burger/burger-01.png",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-02",
        titulo: "Chubby Cow",
        imagen: "../public/img/burger/burger-02.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-03",
        titulo: "Caught & Grilled",
        imagen: "../public/img/burger/burger-03.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-04",
        titulo: "Booming Buffalo",
        imagen: "../public/img/burger/burger-04.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-05",
        titulo: "Veggie",
        imagen: "../public/img/burger/burger-05.jpg",
        categoria: {
            nombre: "burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-06",
        titulo: "Red Alert",
        imagen: "../public/img/burger/burger-06.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-07",
        titulo: "Super League",
        imagen: "../public/img/burger/burger-07.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    {
        id: "burger-08",
        titulo: "Fiery Chic",
        imagen: "../public/img/burger/burger-08.jpg",
        categoria: {
            nombre: "Burger",
            id: "burger"
        },
        precio: 1000
    },
    // Startters
    {
        id: "desserts-01",
        titulo: "Postre 01",
        imagen: "../public/img/desserts/desserts-01.jpg",
        categoria: {
            nombre: "Desserts",
            id: "desserts"
        },
        precio: 1000
    },
    {
        id: "desserts-02",
        titulo: "Postre 02",
        imagen: "../public/img/desserts/desserts-02.jpg",
        categoria: {
            nombre: "Desserts",
            id: "desserts"
        },
        precio: 1000
    },
    {
        id: "desserts-03",
        titulo: "Postre 03",
        imagen: "../public/img/desserts/desserts-03.jpg",
        categoria: {
            nombre: "Desserts",
            id: "desserts"
        },
        precio: 1000
    },
    
    // Starters
    {
        id: "starters-01",
        titulo: "Starters 01",
        imagen: "../public/img/starters/starters-01.jpg",
        categoria: {
            nombre: "Starters",
            id: "starters"
        },
        precio: 1000
    },
    {
        id: "starters-02",
        titulo: "Starters 02",
        imagen: "../public/img/starters/starters-02.jpg",
        categoria: {
            nombre: "Starters",
            id: "starters"
        },
        precio: 1000
    },
    {
        id: "starters-03",
        titulo: "Starters 03",
        imagen: "../public/img/starters/starters-03.jpg",
        categoria: {
            nombre: "Starters",
            id: "starters"
        },
        precio: 1000
    },
    {
        id: "starters-04",
        titulo: "Starters 04",
        imagen: "../public/img/starters/starters-04.jpg",
        categoria: {
            nombre: "Starters",
            id: "starters"
        },
        precio: 1000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");


function cargarProductos (productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement ("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.titulo}</p>
                <p class="producto-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.appendChild(div);

    })

}
cargarProductos (productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
        const productosBoton = productos.filter(producto => producto.categoria.id ===e.currentTarget.id);
        cargarProductos (productosBoton);
        } else {
            cargarProductos(productos);
        }
    })
})