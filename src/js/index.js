import '@scss/style.scss';

import logoImg from '../blocks/header/img/logo.svg';
import ItemImg from '../blocks/services/img/item1.jpg';

import * as slider from './slider.js';
import * as repair from './repair.js';
import * as uncover from './uncover.js';
import * as modal from './modal.js';


let logo = document.querySelectorAll('.header__logo');
let Item = document.querySelector('.services__img');

for (let i = 0; i < logo.length; i++) {
    logo[i].src = logoImg;
    logo[i].alt = "Логотип компании";
}

Item.src = ItemImg;
Item.alt = "Картинка услуги";


let scrollContainer = document.querySelector('.services__list-name');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
});


slider.runSwipers('.swiper-container', '.swiper-pagination', 'data-swiper');

let data = [
    {
        className: 'brends',
        typeContent: 'src',
        content: [
            ['./static/lenovo.svg'],
            ['./static/samsung.svg'],
            ['./static/apple.svg'],
            ['./static/viewsonic.svg'],
            ['./static/bosch.svg'],
            ['./static/hp.svg'],
            ['./static/acer.svg'],
            ['./static/sony.svg'],
            ['./static/lenovo.svg'],
            ['./static/samsung.svg'],
            ['./static/apple.svg']
        ],
        unciverList: true
    },
    {
        className: 'engineering',
        typeContent: 'innerText',
        content: [
            ['Ремонт ноутбуков'],
            ['Ремонт планшетов'],
            ['Ремонт ПК '],
            ['Ремонт мониторов'],
            ['Ремонт телефонов'],
            ['Ремонт реакторов']
        ],
        unciverList: true
    },
    {
        className: 'price',
        typeContent: 'innerText',
        content: [
            ['Ремонтные услуги', 'Диагностика', 'Цена', 'Бесплатно', 'срок', '30-120 мин'],
            ['Ремонтные услуги', 'Замена дисплея', 'Цена', '1 000 ₽', 'срок', '30-120 мин'],
            ['Ремонтные услуги ', 'Замена полифонического динамика', 'Цена', '1 000 ₽', 'срок', '30-120 мин'],
            ['Ремонтные услуги', 'Тестирование с выдачей технического заключения', 'Цена', '1 000 ₽', 'срок', '30-120 мин'],
            ['Ремонтные услуги', 'Замена программного обеспечения', 'Цена', '1 000 ₽', 'срок', '30-120 мин']
        ],
        unciverList: false
    }
];

let swipSetting = {
    swipClass: '.swiper-slide',
    noSwipClass: '.no-swiper-slide',
    swiperWrapperClass: '.swiper-wrapper',
    noSwiperClass: '.no-swiper',
};

repair.repairFill(data, 'repair', '.repair__item-info', swipSetting);

let dataTable = [
    {
        className: 'price',
        typeContent: 'innerText',
        content: [
            ['Диагностика', 'Бесплатно', '30-120 мин'],
            ['Замена дисплея', '1 000 ₽', '30-120 мин'],
            ['Замена полифонического динамика', '1 000 ₽', '30-120 мин'],
            ['Тестирование с выдачей технического заключения', '1 000 ₽', '30-120 мин'],
            ['Замена программного обеспечения', '1 000 ₽', '30-120 мин']
        ]
    }
];

let tableSetting = {
    tableClass: '.no-swiper',
    noSwiperClass: '.no-swiper-slide',
};

repair.repairFillPrice(dataTable, 'repair', '.repair__item-info', tableSetting);


let Uncoverblock = document.querySelectorAll('.uncover-block');
let mass = [];

for (let i = 0; i < Uncoverblock.length; i++) {
    if (Uncoverblock[i]) {
        mass.push(Uncoverblock[i]);
    }
}

let menu = document.querySelector('.menu');
let modalFon = document.querySelector('.modal-core-fon');
let bodySite = document.querySelector('.body-site');

window.addEventListener("resize", function () {
    uncover.generateParamsHeights(mass);

    if (document.querySelector('body').offsetWidth >= 1440) {
        if (menu.classList.contains('modal-core--open')) {
            menu.classList.remove('modal-core--open');
            menu.removeAttribute('style');

            bodySite.classList.remove('body-site--no-scroll');
            
            modalFon.classList.remove('modal-core-fon--open');
            modalFon.dataset.modal = '';
        }
    }
});

let Uncovers = document.querySelectorAll('.uncover-button');
for (let i = 0; i < Uncovers.length; i++) {
    Uncovers[i].addEventListener('click', function () {
        uncover.generateParamsHeights(mass);
        uncover.uncover(Uncovers[i]);
    });
}

modal.modalsCore('modal-core', '.body-site', 'body-site--no-scroll');