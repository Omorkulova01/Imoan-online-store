const sliderImg = document.querySelectorAll('.slider_img')
const sliderImages = document.querySelector('.slider_images')
const sliderBtnPrev = document.querySelector('.slider_btn_prev')
const sliderBtnNext = document.querySelector('.slider_btn_next')

let sliderCount = 0
let sliderWidth

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth

    rollSlider()
}

showSlide()

function nextSlide(){
    sliderCount++
    if(sliderCount >= sliderImg.length) sliderCount = 0

    rollSlider()
}

function prevSlide(){
    sliderCount--
    if(sliderCount < 0) sliderCount = sliderImg.length - 1

    rollSlider()
}

sliderBtnNext.addEventListener('click', nextSlide)
sliderBtnPrev.addEventListener('click', prevSlide)

function rollSlider(){
    sliderImages.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}