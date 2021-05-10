const subscriptionInner = document.querySelector('.subscription__icons__inner')
const boxes = document.querySelectorAll('.subscription__box')
const arrowLeft = document.querySelector('.subscription__arrow-left')
const arrowRight = document.querySelector('.subscription__arrow-right')

let activeIndex = 0
let inner = subscriptionInner.getBoundingClientRect()

arrowLeft.addEventListener('click', () => {
    if (activeIndex === 0) {
        activeIndex = boxes.length - 1
        subscriptionInner.style.transform = `translateX(-${inner.width * activeIndex}px)`
    } else {
        activeIndex--
        subscriptionInner.style.transform = `translateX(-${inner.width * activeIndex}px)`
    }
})

arrowRight.addEventListener('click', () => {
    if (activeIndex === boxes.length - 1) {
        activeIndex = 0
        subscriptionInner.style.transform = `translateX(-${inner.width * activeIndex}px)`
    } else {
        activeIndex++
        subscriptionInner.style.transform = `translateX(-${inner.width * activeIndex}px)`
    }
})