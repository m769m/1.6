export function generateParamsHeights(mass) {
    let root = document.querySelector(':root');

    for (let i = 1; i <= mass.length; i++) {
        let name = '--height-' + i;
        let value = mass[i - 1].firstElementChild.clientHeight + 'px';
        root.style.setProperty(name, value);
    }
}

export function uncover(el) {
    let uncoverId = el.dataset.uncoverButton;

    let block = document.querySelector(`.uncover-block[data-uncover-block="${uncoverId}"]`);
    let perentBlock = block.parentNode;

    let open = document.querySelector(`.uncover-button--open[data-uncover-button="${uncoverId}"]`);
    let close = document.querySelector(`.uncover-button--close[data-uncover-button="${uncoverId}"]`);

    if (open && block.offsetHeight < block.firstElementChild.offsetHeight) {
        perentBlock.classList.add('uncover-parent');

        el.innerText = 'Скрыть';
        el.classList.add('uncover-button--icon-rotate');

        el.classList.add('uncover-button--close');
        el.classList.remove('uncover-button--open');

    } else if (close) {
        perentBlock.classList.remove('uncover-parent');

        el.innerText = 'Показать все';
        el.classList.remove('uncover-button--icon-rotate');

        el.classList.add('uncover-button--open');
        el.classList.remove('uncover-button--close');
    }
}