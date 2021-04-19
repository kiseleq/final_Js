window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.item');
        console.log(slide);

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
});  