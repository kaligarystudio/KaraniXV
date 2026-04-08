const container = document.getElementById("fairy-container");

const isMobile = window.innerWidth < 768;

/* CREAR HADA */
function createFairy() {
    const fairy = document.createElement("div");
    fairy.classList.add("fairy");

    fairy.style.left = Math.random() * window.innerWidth + "px";
    fairy.style.top = window.innerHeight + "px";

    const size = Math.random() * 6 + 4;
    fairy.style.width = size + "px";
    fairy.style.height = size + "px";

    fairy.style.animationDuration = (6 + Math.random() * 6) + "s";

    container.appendChild(fairy);

    setTimeout(() => fairy.remove(), 12000);
}

/* GENERACIÓN CONTINUA */
setInterval(createFairy, isMobile ? 800 : 300);
