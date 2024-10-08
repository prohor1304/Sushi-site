// добавление прослушки в окне
window.addEventListener('click', function (event) {

    // Проверяем клик строго по кнопкам Плюс или Минус  
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // выбираем ближайшего родителя с классом counter-wrapper
        const counterWrapper = event.target.closest('.counter-wrapper');

        // выбираем div с дата атрибутом data-counter
        const counter = counterWrapper.querySelector('[data-counter]');

        // проверяем, является ли элемент, по которому совершен клик, кнопкой Плюс
        if (event.target.dataset.action === 'plus') {

            counter.innerText = ++counter.innerText
        }

        // проверяем, является ли элемент, по которому совершен клик, кнопкой Минус
        if (event.target.dataset.action === 'minus') {

            // Проверка на товар, находящийся в корзине и значение равное 1
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText

                // проверям, что кликнули на минус счетчика в корзине и значение было равно 1
            } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

                // Удаляем товар из корзины
                event.target.closest('.cart-item').remove();

                // Отображение статуса корзины Пустая/Полная
                toggleCartStatus();

                calcCartPriceAndDelivery();
            }
        }

        // проверяем клик на плюс/минус внутри корзины
        if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
            calcCartPriceAndDelivery();
        }
    }
});