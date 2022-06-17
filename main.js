const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// define-element
const html = $('html')
const navbar = $('.navbar')
const sliderItem = $('.slider__item')
const sliderWidth = sliderItem.offsetWidth
const sliderDotList = $$('.slider__dot-item')
const sliderDotItem = $('.slider__dot-item')
const toTop = $('.btn-to-top')
const lastScrollTop = 0
const i = 0




// Function handleEvent
const handleEvent = function() {
    
    // Scroll hide/appear navbar
    document.onscroll = function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop

        if(scrollTop > lastScrollTop) {
            navbar.classList.add('hide')
        } else {
            navbar.classList.remove('hide')
        }

        // add/remove active to top
        if(scrollTop >= 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    }
}

handleEvent()
