console.log("Proyecto Transmedia cargado correctamente");

const audio = document.getElementById("audioFondo");

audio.volume = 0.01;

document.addEventListener("click", () => {
    audio.play();
}, { once: true });


const formularioForo = document.getElementById("formularioForo");
const mensajeForo = document.getElementById("mensajeForo");
const comentarios = document.getElementById("comentarios");
const sinComentarios = document.getElementById("sinComentarios");

formularioForo.addEventListener("submit", function(event) {
    event.preventDefault();

    const mensaje = mensajeForo.value.trim();

    if (mensaje === "") {
        return;
    }

    // Ocultar el aviso de que no hay comentarios
    sinComentarios.style.display = "none";

    // Crear el comentario de forma segura
    const tarjeta = document.createElement("div");
    tarjeta.className = "comentario";

    const autor = document.createElement("strong");
    autor.textContent = "Visitante anónimo";

    const texto = document.createElement("p");
    texto.textContent = mensaje;

    tarjeta.appendChild(autor);
    tarjeta.appendChild(texto);

    comentarios.prepend(tarjeta);

    // Limpiar el cuadro
    mensajeForo.value = "";
});