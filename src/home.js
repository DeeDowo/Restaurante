
function getHome(){
    const contenedor = document.querySelector('.contenedor')
    contenedor.classList.add('home');
    contenedor.innerHTML =
        `<div class="overlay"></div>
        <div class="contenido">
            <h2 class="contenedor__titulo">
            <span class="titulo__destacado">
                Dowo
            </span>
                Restaurante
            </h2>
            <div class="card">
                <p class="card__titulo">Bienvenido</p>
                <p class="card__mensaje">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid fuga hic modi porro possimus praesentium?</p>
            </div>
        </div>`;
}

export {getHome}
