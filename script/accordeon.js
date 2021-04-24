window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const accordeon = () => {
        const accord = document.querySelectorAll('.accord'),
            del = document.querySelector('.del');
            del.style.display = 'none';

        accord.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    const child = item.querySelector('.element-content');
                    child.style.display = 'none';
                } else {
                    accord.forEach((item) => {
                        item.classList.remove('active');
                        const child = item.querySelector('.element-content');
                        child.style.display = 'none';
                    });

                    item.classList.add('active');
                    const child = item.querySelector('.element-content');
                    child.style.display = 'block';
                    
                }
            });
        });


    };

    accordeon();


});