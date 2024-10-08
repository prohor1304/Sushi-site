// Калькуляция общей стоимости заказа
function calcCartPriceAndDelivery() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    priceElements.forEach(function (item) {

        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

        // количество * цену
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    })

    // отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    // скрываем/показываем блок со стоимостью доставки;
    if (priceTotal > 0) {
        cartDeliveryEl.classList.remove('none')
    }

    // указываем стоимость доставки
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽'
    }
}