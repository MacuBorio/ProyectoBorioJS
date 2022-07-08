let hierbas = [
    {
        "id":"001",
        "nombre":"Té Verde",
        "precio":100,
        "img":"assets/img/te-verde-hebras-web-400x400.jpg"
    },
    {
        "id":"002",
        "nombre":"Manzanilla",
        "precio":100,
        "img":"assets/img/manzanilla-flor-400x400.jpg"
    },
    {
        "id":"003",
        "nombre":"Cedrón",
        "precio":100,
        "img":"assets/img/cedron-400x400.jpg"
    },
    {
        "id":"004",
        "nombre":"Cola de Caballo",
        "precio":100,
        "img":"assets/img/cola-de-caballo-400x400.jpg"
    },
    {
        "id":"005",
        "nombre":"Melisa",
        "precio":100,
        "img":"assets/img/melisa-400x400.jpg"
    },
    {
        "id":"006",
        "nombre":"Tilo",
        "precio":100,
        "img":"assets/img/tilo-web-400x400.jpg"
    }
]

let carrito

if(JSON.parse(localStorage.getItem("carrito")))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

//Función para desplegar esto en el DOM
//Un for para recorrer nuestro array

function desplegarProductos() {

    for (let i = 0; i < hierbas.length; i++) {
        const element = hierbas[i];
        const { id, nombre, precio, img } = element
        const card = `

        <div class="card" style="width: 18rem;margin: 10px;">
            <img src=${img} class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${precio}</p>
            <button id=${id} class='botonAgregar'>Agregar</button>
            </div>
        </div>

        `
        const container = document.getElementById("container")
        container.innerHTML +=card
    }
}

desplegarProductos()

const botonAgregar = document.getElementsByClassName('botonAgregar')

for (let i = 0; i < botonAgregar.length; i++) {
    const element = botonAgregar[i];
    element.addEventListener('click', agregarAlCarrito);
    element.addEventListener('click', () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El item fue agregado a su carrito de compras',
            showConfirmButton: false,
            timer: 1500
          })
            })
}



function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = hierbas.find(prod => prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    }
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.length
