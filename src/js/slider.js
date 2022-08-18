import Swiper, { Pagination } from 'swiper';


export function runSwipers(classNameContainer, ClassNamePagination, dataName) {
    let swipers = document.querySelectorAll(classNameContainer);

    for (let i = 1; i <= swipers.length; i++) {
        new Swiper(`${classNameContainer}[${dataName}="${i}"]`, 
            {
                modules: [Pagination],
                pagination: {
                    el: `${ClassNamePagination}[${dataName}="${i}"]`,
                    clickable: true,
                },
                slidesPerView: 'auto',
            }
        );
    }
} 