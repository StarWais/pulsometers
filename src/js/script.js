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
const expand = document.querySelectorAll('.item__expand');
const catalogs = document.querySelectorAll('.catalog__content');

tabbtns.forEach((el, elid) => {
    el.addEventListener('click', () => {
        tabbtns.forEach(btn => {
            btn.classList.remove('tab_active');
        });
        el.classList.add('tab_active');

        catalogs.forEach((cat, catid) => {
          if(catid == elid) {
            cat.classList.remove('hidden');
          }
          else {
            cat.classList.add('hidden');
          }
        });
    });
});

expand.forEach(el => {
  el.addEventListener('click', () => {
    let usualitem = el.parentElement.parentElement.querySelector('.item__usual');
    let expandeditem = el.parentElement.parentElement.querySelector('.item__expanded');
    if(!usualitem.classList.contains('hidden')) {
      usualitem.classList.add('hidden');
      expandeditem.classList.remove('hidden');
      el.innerHTML = 'НАЗАД';
    }
    else {
      expandeditem.classList.add('hidden');
      el.innerHTML = 'ПОДРОБНЕЕ';
      usualitem.classList.remove('hidden');
    }
  });
  
});