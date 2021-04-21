window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const submitBtn = document.querySelector('.submit-btn');
         
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('./server.php')
                .then((response) => {
                    console.log(response);
                });
                

        });


    };

    sendForm();

});