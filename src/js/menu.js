const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const toggleBtn = document.querySelector('.nav__toggle')
const navMenu = document.querySelector('.nav__menu')
const navLinks = document.querySelectorAll('.nav__link')


const height = header.getBoundingClientRect().height

function toggleNavBg() {
    if (window.pageYOffset > height) {
        nav.style.background = '#bfc4cf'
    } else {
        nav.style.background = 'transparent'
    }
}

function openMenu() {
    navMenu.classList.toggle('open')
}

function linkAction(e) {
    e.preventDefault()

    navLinks.forEach(link => link.classList.remove('active'))
    e.target.classList.add('active')

    const blockId = e.target.getAttribute('href')
    document.querySelector(`${blockId}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open')
    }
}

document.addEventListener('scroll', toggleNavBg)

toggleBtn.addEventListener('click', openMenu)

navLinks.forEach(link => link.addEventListener('click', linkAction))

navLinks[0].click()