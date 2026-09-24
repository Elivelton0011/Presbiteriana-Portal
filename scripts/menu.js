const header = document.querySelector('#header');
const mobile = window.matchMedia('(max-width: 900px)');

function atualizaHeader() {
    header.classList.toggle('rolagem', !mobile.matches && window.scrollY > 0);
}

window.addEventListener('scroll', atualizaHeader, { passive: true });
mobile.addEventListener('change', atualizaHeader);
atualizaHeader();