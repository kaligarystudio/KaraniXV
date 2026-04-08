const container = document.getElementById("fairy-container");

function createFairy() {
    const fairy = document.createElement("div");
    fairy.classList.add("fairy");

    // Posición inicial aleatoria
    fairy.style.left = Math.random() * window.innerWidth + "px";
    fairy.style.top = window.innerHeight + "px";

    // Duración aleatoria
    fairy.style.animationDuration = (8 + Math.random() * 10) + "s";

    // Tamaño variable
    const size = 5 + Math.random() * 6;
    fairy.style.width = size + "px";
    fairy.style.height = size + "px";

    container.appendChild(fairy);

    // Eliminar después de animación
    setTimeout(() => {
        fairy.remove();
    }, 18000);
}

// Generar hadas continuamente
setInterval(createFairy, 300);
