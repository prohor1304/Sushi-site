//Находим элементы на странице
const btnMinus = document.querySelector("[data-action='minus']");
const btnPlus = document.querySelector("[data-action='plus']");
const counter = document.querySelector("[data-counter]");

//отслеживаем клик на минус
btnMinus.addEventListener('click', function () {

    //проверка что счетчик > 1
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText
    }

})

//отслеживаем клик на плюс
btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText
})