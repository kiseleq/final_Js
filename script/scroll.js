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
        const links = document.querySelectorAll('.link'),
            targets = document.querySelectorAll('.target');

        links.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                let t = event.target;
                console.log(t);

                if (t === links[0]) {
                    window.scroll({
                        left: 0,
                        top: targets[0].offsetTop,
                        behavior: 'smooth',
                    });
                } else if (t === links[1]) {
                    window.scroll({
                        left: 0,
                        top: targets[1].offsetTop,
                        behavior: 'smooth',
                    });
                } else if (t === links[2]) {
                    window.scroll({
                        left: 0,
                        top: targets[2].offsetTop,
                        behavior: 'smooth',
                    });
                }
                
            });
        });
        

    };

    scrollToTargets();


});