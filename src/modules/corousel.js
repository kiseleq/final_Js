
const corousel = () => {
    const items = document.querySelectorAll('.courItem'),
        modalCallBack = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        corus = document.querySelector('.services-carousel'),
        btnLeft = document.querySelector('.arrow-left'),
        btnRight = document.querySelector('.arrow-right');

        let change = 3,
        pos = 0;
        


    items.forEach((item) => {
        item.addEventListener('click', () => {
            modalCallBack.style.display = 'block';
            modalOverlay.style.display = 'block';
        });
    });

    btnLeft.addEventListener('click', () => {
        if (pos < 0) {
            pos += 375;
            items.forEach((item) => {
                item.style.transform = `translateX(${pos}px)`;
                item.style.transition = 'all, 1s';
            });
        } else {
            pos = -1875;
            items.forEach((item) => {
                item.style.transform = `translateX(${pos}px)`;
                item.style.transition = 'all, 1s';
            });
        }
    });

    btnRight.addEventListener('click', () => {
        if (pos > -1875) {
            pos -= 375;
            items.forEach((item) => {
                item.style.transform = `translateX(${pos}px)`;
                item.style.transition = 'all, 1s';
            });
        } else {
            pos = 0;
            items.forEach((item) => {
                item.style.transform = `translateX(${pos}px)`;
                item.style.transition = 'all, 1s';
            });
        }

    });

};

export default corousel;


