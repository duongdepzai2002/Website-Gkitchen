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
    // Click remove overLay
    const overlay = $('.overlay')
    const overlayIcon = $('.overlay__icon')
    const overlayContent = $('.overlay__content')

    overlayIcon.onclick = function() {
        overlay.classList.add('hide')
    }

    overlayContent.onclick = function(e) {
        e.stopPropagation()
    }
    
    // Click => move slide
    sliderDotList.forEach((dot, index) => {
        dot.onclick = function() {
            $('.slider__dot-item.active').classList.remove('active')
            
            this.classList.add('active')
            sliderItem.style.marginLeft = 0 - (sliderWidth * index) + 'px'

        }
    })

    // Click out of element
    html.onclick = function (e) {
        navbarScanWrap.classList.remove('active')
        languageSwap.classList.remove('active')
        overlay.classList.add('hide')
    }

    // Click open/close element
    const navbarScan = $('.navbar-scan')
    const navbarScanWrap = $('.navbar-scan__wrap')
    const navBotLanguage = $('.nav-bot__language')
    const languageSwap = $('.language-swap')
    var isOpen = false

    navbarScan.onclick = function (e) {
        if(isOpen) {
            isOpen = false
            navbarScanWrap.classList.remove('active')
        } else {
            isOpen = true
            navbarScanWrap.classList.add('active')
        }

        e.stopPropagation()
    }

    navBotLanguage.onclick = function (e) {
        if(isOpen) {
            isOpen = false
            languageSwap.classList.remove('active')
        } else {
            isOpen = true
            languageSwap.classList.add('active')
        }

        e.stopPropagation()
    }

    // Open Form-cart
    const cartIcon = $('.nav-bot__cart-icon')
    const cartForm = $('.cart-form')
    const slider = $('.slider')
    const content = $('.content')
    const buyTag = $('.buy-tag')

    cartIcon.onclick = function () {
        slider.classList.add('hide')
        content.classList.add('hide')
        cartForm.classList.add('active')
        formContainer.classList.remove('active')
        buyTag.classList.add('hide')
    }

    // Open Form-login
    const loginWrapper = $('.login-wrapper')
    const formContainer = $('.form-container')

    loginWrapper.onclick = function () {
        formContainer.classList.add('active')
        slider.classList.add('hide')
        content.classList.add('hide')
        cartForm.classList.remove('active')
        buyTag.classList.add('hide')
    }
    
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

    // click open/close menu on scroll
    const menuOpen = $('.menu-open')
    const menuClose = $('.menu-close')
    const navTopList = $('.navbar-top-mobile-tablet')

    menuOpen.onclick = function() {
        this.classList.remove('active')
        menuClose.classList.add('active')
        navTopList.classList.add('active')
    }

    menuClose.onclick = function() {
        menuOpen.classList.add('active')
        this.classList.remove('active')
        navTopList.classList.remove('active')
    }
}

// Login form
function login() {
    const formBtn = $('.form-btn')
    formBtn.onclick = function() {
        var accValue = document.getElementById('input-1').value;
        var pwValue = document.getElementById('input-2').value;
        if (accValue === '030702' && pwValue === 'boyham2002') {
            alert('Đăng nhập thành công, sẽ chuyển hướng trong giây lát !')
            this.href = 'https://duongdepzai2002.github.io/web-manager-test/?fbclid=IwAR392_QXVm2Xl0WUAvGHIk-K6kw0XUuprPysnFlCukImX-O6yTFgFlBGU8M'
        } else {
            this.href = '#'
            alert('Đăng nhập thất bại, tính năng này đang up date !')
        }
    }
}


handleEvent()
login()
