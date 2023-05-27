let btn = document.querySelectorAll('.btn')
let modal = document.querySelector('.modal')
let modal__close = document.querySelector('.modal__close')

btn[0].addEventListener('click', () => {
    modal.style.display = 'block'
})

btn[1].addEventListener('click', () => {
    modal.style.display = 'block'
})

modal__close.addEventListener('click', () => {
    modal.style.display = 'none'
})