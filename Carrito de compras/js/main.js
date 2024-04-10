let productos = [
    
        {
            "id": "abrigo-01",
            "titulo": "Abrigo 01",
            "imagen": "./img/abrigos/01.jpg",
            "categoria": {
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": 200000
        },
        {
            "id": "abrigo-02",
            "titulo": "Abrigo 02",
            "imagen": "./img/abrigos/02.jpg",
            "categoria": {
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": 210000
        },
        {
            "id": "abrigo-03",
            "titulo": "Abrigo 03",
            "imagen": "./img/abrigos/03.jpg",
            "categoria": {
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": 220000
        },
        {
            "id": "abrigo-04",
            "titulo": "Abrigo 04",
            "imagen": "./img/abrigos/04.jpg",
            "categoria": {
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": 230000
        },
        {
            "id": "abrigo-05",
            "titulo": "Abrigo 05",
            "imagen": "./img/abrigos/05.jpg",
            "categoria": {
                "nombre": "Abrigos",
                "id": "abrigos"
            },
            "precio": 240000
        },
        {
            "id": "camiseta-01",
            "titulo": "Camiseta 01",
            "imagen": "./img/camisetas/01.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 70000
        },
        {
            "id": "camiseta-02",
            "titulo": "Camiseta 02",
            "imagen": "./img/camisetas/02.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 70000
        },
        {
            "id": "camiseta-03",
            "titulo": "Camiseta 03",
            "imagen": "./img/camisetas/03.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 80000
        },
        {
            "id": "camiseta-04",
            "titulo": "Camiseta 04",
            "imagen": "./img/camisetas/04.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 80000
        },
        {
            "id": "camiseta-05",
            "titulo": "Camiseta 05",
            "imagen": "./img/camisetas/05.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 80000
        },
        {
            "id": "camiseta-06",
            "titulo": "Camiseta 06",
            "imagen": "./img/camisetas/06.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 80000
        },
        {
            "id": "camiseta-07",
            "titulo": "Camiseta 07",
            "imagen": "./img/camisetas/07.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 70000
        },
        {
            "id": "camiseta-08",
            "titulo": "Camiseta 08",
            "imagen": "./img/camisetas/08.jpg",
            "categoria": {
                "nombre": "Camisetas",
                "id": "camisetas"
            },
            "precio": 70000
        },
        {
            "id": "pantalon-01",
            "titulo": "Pantalón 01",
            "imagen": "./img/pantalones/01.jpg",
            "categoria": {
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": 70000
        },
        {
            "id": "pantalon-02",
            "titulo": "Pantalón 02",
            "imagen": "./img/pantalones/02.jpg",
            "categoria": {
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": 90000
        },
        {
            "id": "pantalon-03",
            "titulo": "Pantalón 03",
            "imagen": "./img/pantalones/03.jpg",
            "categoria": {
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": 80000
        },
        {
            "id": "pantalon-04",
            "titulo": "Pantalón 04",
            "imagen": "./img/pantalones/04.jpg",
            "categoria": {
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": 90000
        },
        {
            "id": "pantalon-05",
            "titulo": "Pantalón 05",
            "imagen": "./img/pantalones/05.jpg",
            "categoria": {
                "nombre": "Pantalones",
                "id": "pantalones"
            },
            "precio": 70000
        }
    
];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}