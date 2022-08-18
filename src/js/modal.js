export function modalsCore(nameModelClass,bodyClass, bodyNoScrollClass) {
    function closeModal(data) { 
        let modal = document.querySelector(`#${nameModelClass}-${data}`);

        let close = modal.querySelector(`.${nameModelClass}-close`);

        close.removeAttribute('data-modal');
        modalFon.dataset.modal = '';

        modalFon.classList.remove(`${nameModelClass}-fon--open`);
        bodySite.classList.remove(bodyNoScrollClass);
        modal.classList.remove(`${nameModelClass}--open`);

        modal.addEventListener("transitionend", function () {
            if (!modal.classList.contains('modal-core--open')) {
                modal.removeAttribute('style');
            }
        });
    }

    let bodySite = document.querySelector(bodyClass);

    let modalFon = document.querySelector(`.${nameModelClass}-fon`);
    let modalClose = document.querySelectorAll(`.${nameModelClass}-close`);
    let modalOpen = document.querySelectorAll(`.${nameModelClass}-open`);

    for (let i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener('click', function (e) {
            e.stopPropagation();

            let modalId = modalOpen[i].dataset.modal;

            if (modalFon.dataset.modal != modalId && modalFon.dataset.modal != "") {
                closeModal(modalFon.dataset.modal);
            }

            bodySite.classList.add(bodyNoScrollClass);

            let modal = document.querySelector(`#${nameModelClass}-${modalId}`);
            let close = modal.querySelector(`.${nameModelClass}-close`);

            modalFon.dataset.modal = modalId;
            close.dataset.modal = modalId;

            modal.style.display = "block";
            
            setTimeout(
                function () {
                    modalFon.classList.add(`${nameModelClass}-fon--open`);
                    modal.classList.add(`${nameModelClass}--open`);
                }, 1
            );
        });
    }

    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function (e) {
            closeModal(modalClose[i].dataset.modal);
        });
    }

    document.addEventListener('click', function (e) {
        var target = e.target;
        var itsFon = target == modalFon;
        var modalActive = modalFon.classList.contains(`${nameModelClass}-fon--open`);

        if (itsFon && modalActive) {
            closeModal(modalFon.dataset.modal);
        }
    });
}