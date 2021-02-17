let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.carousel__next').addEventListener('click', () => {
    slider.goTo('next');
  });

document.querySelector('.carousel__previous').addEventListener('click', () => {
    slider.goTo('prev');
  });

const tabbtns = document.querySelectorAll('.catalog__tab');

console.dir(tabbtns);

tabbtns.forEach(el => {
    el.addEventListener('click', () => {
        tabbtns.forEach(btn => {
            btn.classList.remove('tab_active');
        });
        el.classList.add('tab_active');
    });
});