function getHome(){
    const contenedor = document.querySelector('.contenedor')

    contenedor.innerHTML =
        `<h2 class="contenedor__titulo">
        <span class="titulo__destacado">
            Dowo
        </span>
            Restaurante
    </h2>
    <div class="card">
        <p class="card__titulo">Bienvenido a</p>
        <p class="card__mensaje">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid fuga hic modi porro possimus praesentium? Architecto doloremque esse est! Adipisci aliquam deserunt ea minus, natus necessitatibus numquam officia voluptatem!</p>
    </div>`;
}

export {getHome}
