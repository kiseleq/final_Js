window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.item');

        let currentSlide = 0;

        let autoPlaySlide = () => {
             
            slide[currentSlide].style.display = 'none';
            
            currentSlide++;
            if (currentSlide === 3) currentSlide = 0;
            slide[currentSlide].style.display = 'block';

        };

        let startSlide = () => {
            setInterval(autoPlaySlide, 3000);

        };

        startSlide();

    };

    slider();

    //Scroll

    const scrollTop = () => {
        const target = document.querySelector('.services-section'),
            btn = document.querySelector('.up');

        const scroll = () => {
            window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth',
            });
        };

        const hideBtn = () => {
            let deadline = target.offsetTop,
            fromTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

            if (fromTop <= deadline) {
                btn.style.display = 'none';
            } else {
                btn.style.display = 'block';
            }
        };
        hideBtn();
        btn.addEventListener('click', scroll);
        window.addEventListener('scroll', hideBtn);
        


    };

    scrollTop();

    

});  