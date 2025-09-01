import pastel1 from "./img/card_pastel_1.jpg";
import pastel2 from "./img/card_pastel_2.jpg";
import pastel3 from "./img/card_pastel_3.jpg";

function menu() {
    const contenedor = document.querySelector('.contenedor')
    contenedor.classList.remove('home', 'us');
    contenedor.classList.add('menu');
    contenedor.innerHTML =
        `<div class="card-menu">
        <div class="card-menu__imagen1">
  
        </div>
        <div class="card-menu__info">
            <p class="card-menu__titulo">
                Pastel especial
            </p>
            <p class="card-menu__descripcion">
                lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button class="card-menu__button">
                Comprar
            </button>
        </div>
    </div>

    <div class="card-menu">
        <div class="card-menu__imagen2">

        </div>
        <div class="card-menu__info">
            <p class="card-menu__titulo">
                Pastel especial
            </p>
            <p class="card-menu__descripcion">
                lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button class="card-menu__button">
                Comprar
            </button>
        </div>
    </div>

    <div class="card-menu">
        <div class="card-menu__imagen3">

        </div>
        <div class="card-menu__info">
            <p class="card-menu__titulo">
                Pastel especial
            </p>
            <p class="card-menu__descripcion">
                lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button class="card-menu__button">
                Comprar
            </button>
        </div>
    </div>`;

    const imagen_contenedor = document.querySelector('.card-menu__imagen1');
    const imagen_contenedor2 = document.querySelector('.card-menu__imagen2');
    const imagen_contenedor3 = document.querySelector('.card-menu__imagen3');

    insertarImagen(imagen_contenedor, pastel1);
    insertarImagen(imagen_contenedor2, pastel2);
    insertarImagen(imagen_contenedor3, pastel3);
}

function insertarImagen(contenedor, imagen){
    let img = document.createElement('img');
    img.src = imagen;
    contenedor.appendChild(img);
}

export {menu}