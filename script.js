const startScreen = document.getElementById("start-screen");
const scene = document.querySelector(".scene");
const music = document.getElementById("bg-music");

/* INICIO */
document.querySelector(".fairy-start").addEventListener("click", () => {
    startScreen.style.display = "none";
    scene.classList.remove("hidden");

    music.volume = 0.5;
    music.play();

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
