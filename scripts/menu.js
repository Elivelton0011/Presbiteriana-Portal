const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 1024) return;

    header.classList.toggle('rolagem', window.scrollY > 0);
});