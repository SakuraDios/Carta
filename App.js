const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

btnAbrir.addEventListener("click", () => {
    const Superior = document.querySelector(".superior");
    Superior.classList.add("abrir-superior");

    const Mensaje = document.querySelector(".mensaje");

    setTimeout(() => {
        const Parar = document.querySelector(".bx");
        Parar.classList.add("bx-rotada");
        Mensaje.classList.add("abrir-mensaje");
    }, 700);

    const H1 = document.querySelector("h1");
    H1.classList.add("abrir-h1");

    const PP = document.querySelector(".ppalabras");
    PP.classList.add("abrir-pp");
});

btnCerrar.addEventListener("click", () => {
    const Superior = document.querySelector(".superior");
    const Mensaje = document.querySelector(".mensaje");
    const Parar = document.querySelector(".bx");
    const H1 = document.querySelector("h1");
    const PP = document.querySelector(".ppalabras");

    // Primero quitamos clases visibles
    Mensaje.classList.remove("abrir-mensaje");
    

    // Esperamos la animación de mensaje antes de cerrar el sobre
    setTimeout(() => {
        
        Superior.classList.remove("abrir-superior");
        Parar.classList.remove("bx-rotada");
        PP.classList.remove("abrir-pp");
        H1.classList.remove("abrir-h1");
    }, 700); // Este tiempo depende de cuánto dure la animación en CSS
});

const Contenedor = document.querySelector("#AbrirContenedor");
Contenedor.addEventListener("click", () => {
    const Superior = document.querySelector(".superior");
    Superior.classList.add("abrir-superior");

    const Mensaje = document.querySelector(".mensaje");

    setTimeout(() => {
        const Parar = document.querySelector(".bx");
        Parar.classList.add("bx-rotada");
        Mensaje.classList.add("abrir-mensaje");
    }, 700);

    const H1 = document.querySelector("h1");
    H1.classList.add("abrir-h1");

    const PP = document.querySelector(".ppalabras");
    PP.classList.add("abrir-pp");
})