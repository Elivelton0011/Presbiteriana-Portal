let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0


function nextSlide() {
    let activeOld = document.querySelector('.item.active')
    activeOld.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1

    list[active].classList.add('active')
}


function prevSlide() {
    let activeOld = document.querySelector('.item.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1

    list[active].classList.add('active')
}


next.onclick = () => {
    nextSlide()
}


prev.onclick = () => {
    prevSlide()
}


// troca automaticamente a cada 2 segundos
setInterval(() => {
    nextSlide()
}, 10000)