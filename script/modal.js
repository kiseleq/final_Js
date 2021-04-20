window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const openModal = () => {
        const modalBtn = document.querySelector('.modalBtn'),
            modalCallBack = document.querySelector('.modal-callback'),
            modalOverlay = document.querySelector('.modal-overlay'),
            modalClose = document.querySelector('.modal-close'),
            serviceBtn = document.querySelector('.serviceBtn');

        modalBtn.addEventListener('click', () => {
            modalCallBack.style.display = 'block';
            modalOverlay.style.display = 'block';
        });

        modalClose.addEventListener('click', () => {
            modalCallBack.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

        serviceBtn.addEventListener('click', () => {
            modalCallBack.style.display = 'block';
            modalOverlay.style.display = 'block';
        });
    };

    openModal();

});