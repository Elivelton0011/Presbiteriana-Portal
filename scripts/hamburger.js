const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

function setMenu(aberto) {
    nav.classList.toggle("active", aberto);
    hamburger.classList.toggle("active", aberto);
    hamburger.setAttribute("aria-expanded", aberto);
    hamburger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = aberto ? "hidden" : "";
}

hamburger.addEventListener("click", () => setMenu(!nav.classList.contains("active")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});