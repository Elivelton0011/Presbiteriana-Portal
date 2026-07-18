const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

function toggleMenu() {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

const navDebug = document.querySelector("nav");

new MutationObserver((mutations) => {
    mutations.forEach((m) => {
        if (m.attributeName === "class") {
            console.log("classe da nav mudou para:", navDebug.className);
            console.trace(); // mostra QUEM chamou essa mudança
        }
    });
}).observe(navDebug, { attributes: true });