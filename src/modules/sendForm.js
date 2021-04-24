
    
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const submitBtn = document.querySelector('.submit-btn'),
            modalWindow = document.querySelector('.modalWindow'),
            nameForm = document.querySelector('.name-form'),
            phoneForm = document.querySelector('.phone-form');
         
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (nameForm.value != '' && phoneForm.value != '') {
                const createMessage = () => {
                    modalWindow.insertAdjacentHTML('beforeend', `
                    <div class='modal-message delete5'></div>
                    `);
                    const modalMessage = document.querySelector('.modal-message');
                    modalMessage.textContent = loadMessage;
                    modalMessage.style.textContent = `
                        font-size: 3rem;
                        margin: auto;
                        font-family: "Open Sans", sans-serif;

                    `;

                    nameForm.value = '';
                    phoneForm.value = '';
    
                };
                createMessage();
    
                const deleteMessage = () => {
                    const modalMessage = document.querySelector('.modal-message');
                    modalMessage.remove();
                    
                };
                setTimeout(deleteMessage, 5000);

                const modalMessage = document.querySelector('.modal-message');

                const send = () => {
                    const body = {
                        name: nameForm.value,
                        phone: phoneForm.value,
                    };
                    return fetch('server.php', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'post',
                        body: JSON.stringify(body),
                    });

                };

                send()
                    .then(() => {
                        modalMessage.textContent = successMessage;
                    })
                    .catch( (err) => {
                        modalMessage.textContent = errorMessage;
                    });



            } else {
                alert('Введите данные в поля ввода!');
            }
            
           
        });


    };

    export default sendForm;
