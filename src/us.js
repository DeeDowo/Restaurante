function us(){
    const contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML =
        `<div class="sobre-nosotros__card">
        <h2 class="sobre-nosotros__titulo">
            Sobre nosotros
        </h2>
        <p class="sobre-nosotros__texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button class="sobre-nosotros__boton">
            Saber más
        </button>
    </div>`;
}

export {us}