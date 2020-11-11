
   window.addEventListener('DOMContentLoaded', function() {
     'use strict'

// <Табы для блока с ценами> ============================================
    let priceTabs = document.querySelector('.price__tabs'),
        tab = document.querySelectorAll('.price__tab'),
        priceContent = document.querySelectorAll('.price-content__item');
    
    function hidePriceContent (a) {
        for (let i = a; i < priceContent.length; i++) {
            priceContent[i].classList.remove('show');
            priceContent[i].classList.add('hide');
            tab[i].classList.remove('tab--active');
        }
    }

    hidePriceContent(1);

    function showPriceContent(b) {
        if (priceContent[b].classList.contains('hide')) {
            priceContent[b].classList.remove('hide');
            priceContent[b].classList.add('show');
            tab[b].classList.add('tab--active');
        }
    }

    priceTabs.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('price__tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hidePriceContent(0);
                    showPriceContent(i);
                    break;
                }
            }
        }
    });
// </Табы для блока с ценами> ============================================



// <Модальное окно с формой обратной связи> ================================
   let more = document.querySelectorAll('.popup-link'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup__closed');

    more.forEach(function(item, i) {
        more[i].addEventListener('click', function() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
    // </Модальное окно с формой обратной связи> ===============================

    // <Slider Инструкторы> =====================================================
    let slideIndex = 1,
        slides = document.querySelectorAll('.instructor-slider__item'),
        prev = document.querySelector('.arrow-left'),
        next = document.querySelector('.arrow-right'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
    // <Slider Инструкторы> =====================================================

});






