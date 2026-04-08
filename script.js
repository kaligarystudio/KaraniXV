const startScreen = document.getElementById("start-screen");
const scene = document.querySelector(".scene");
const music = document.getElementById("bg-music");

/* INICIO */
const fairyBtn = document.getElementById("fairy-btn");

fairyBtn.addEventListener("click", (e) => {

    /* CREAR POLVO MÁGICO */
    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        document.body.appendChild(sparkle);

        sparkle.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${Math.random()*200-100}px, ${Math.random()*-200}px)`, opacity: 0 }
        ], {
            duration: 1200 + Math.random()*800,
            easing: "ease-out"
        });

        setTimeout(() => sparkle.remove(), 2000);
    }

    /* TRANSICIÓN SUAVE */
    const startScreen = document.getElementById("start-screen");
    startScreen.style.transition = "opacity 1s";
    startScreen.style.opacity = "0";

    setTimeout(() => {
        startScreen.style.display = "none";
    }, 1000);

    /* ACTIVAR ESCENA */
    const scene = document.querySelector(".scene");
    scene.classList.remove("hidden");

    /* MÚSICA */
    const music = document.getElementById("bg-music");
    if (music) {
        music.volume = 0;
        music.play();

        /* FADE IN */
        let vol = 0;
        const fade = setInterval(() => {
            vol += 0.05;
            music.volume = vol;
            if (vol >= 0.5) clearInterval(fade);
        }, 200);
    }

    startFairies();
});

/* HADAS */
const container = document.getElementById("fairy-container");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener("touchmove", (e) => {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
});

function createFairy() {
    const fairy = document.createElement("div");
    fairy.classList.add("fairy");

    const size = Math.random() * 6 + 4;
    fairy.style.width = size + "px";
    fairy.style.height = size + "px";

    fairy.style.left = mouseX + "px";
    fairy.style.top = mouseY + "px";

    fairy.animate([
        { transform: "translate(0,0)", opacity: 0 },
        { opacity: 1 },
        { transform: `translate(${Math.random()*100-50}px, -200px)` },
        { opacity: 0 }
    ], {
        duration: 4000 + Math.random()*2000
    });

    container.appendChild(fairy);
    setTimeout(() => fairy.remove(), 6000);
}

function startFairies() {
    setInterval(createFairy, 250);
}
