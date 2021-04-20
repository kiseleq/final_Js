window.addEventListener('DOMContentLoaded', function(){
    'use strict';

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

    
    const scrollToTargets = () => {
        const targets = document.querySelectorAll('.target');

        targets.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(31);
            });
        });
        

    };

    scrollToTargets();


});