const getTemplate = ({
    data
}) => {
    const slides = data.map(slide => {
        let path = slide.path
        let alt = path.substring(path.indexOf('/') + 1, path.indexOf('.'))
        return `
            <div class="slide" data-type="slide">
                <img src=${slide.path} alt=${alt}>
            </div>
        `
    })

    let dots = ''
    for (let i = 0; i < data.length; i++) {
        dots += '<div class="dot" data-type="dot"></div>'
    }

    return `
        <div class="gallery__inner">
            ${slides.join('')}
        </div>
        <div class="gallery__dots">
            ${dots}
        </div>
        <div class="gallery__arrow-top" data-type="top"></div>
        <div class="gallery__arrow-bottom" data-type="bottom"></div>
    `
}

class Slider {
    constructor(selector, options) {
        this.el = document.querySelector(selector)
        this.options = options
        this.activeIndx = 0

        this.render()
        this.setup()
    }

    render() {
        this.el.classList.add('gallery')
        this.el.innerHTML = getTemplate(this.options)
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.el.addEventListener('click', this.clickHandler)

        this.inner = this.el.querySelector('.gallery__inner')
        this.arrowTop = this.el.querySelector('[data-type="top"]')
        this.arrowBottom = this.el.querySelector('[data-type="bottom"]')

        this.activeDot()
    }

    clickHandler(e) {
        const {type} = e.target.dataset

        if (type === 'top') {
            this.prevSlide()
        } else if (type === 'bottom') {
            this.nextSlide()
        }
    }

    nextSlide() {
        this.activeIndx += 1
        this.activeSlide()
        this.activeDot()
        this.toggleArrow()
    }

    prevSlide() {
        this.activeIndx -= 1
        this.activeSlide()
        this.activeDot()
        this.toggleArrow()
    }

    activeSlide() {
        const height = this.inner.getBoundingClientRect().height
        this.inner.style.transform = `translateY(-${height * this.activeIndx}px)`
    }

    activeDot() {
        this.el.querySelectorAll('[data-type="dot"]').forEach(dot => dot.classList.remove('active'))
        this.el.querySelectorAll('[data-type="dot"]')[this.activeIndx].classList.add('active')
    }

    toggleArrow() {
        this.arrowTop.style.display = 'block'
        this.arrowBottom.style.display = 'block'
        if (this.activeIndx === 0) {
            this.arrowTop.style.display = 'none'
            this.arrowBottom.style.display = 'block'
        } else if (this.activeIndx === this.options.data.length - 1) {
            this.arrowTop.style.display = 'block'
            this.arrowBottom.style.display = 'none'
        }
    }
}

const slider = new Slider('#gallery', {
    data: [{
            path: 'images/header/sofa.png'
        },
        {
            path: 'images/header/table.png'
        },
        {
            path: 'images/header/ottomans.png'
        }
    ]
})