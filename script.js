//У нас есть элементы, в которых записаны цены айтимов из корзины. Нужно записать их все в переменные
const priceElements = document.querySelectorAll('.price');

// /Взять значение из них (метод innerHTML)
const prices = Array.from(priceElements).map(element => +element.innerHTML);

//Привести значение переменных к числу (вспомним про унарный плюс) - !!вот тут применить унарный плюс к массиву с помощью map у меня не получилось (код не срабатывал). Подскажите потом, как лучше надо было сделать

//Сложить значения переменных
const totalPrice = prices.reduce(function (sum, price) {
    return sum + price;
}, 0);

//Вставить полученное значение в элемент (предварительно найти его и записать в переменную)
const totalSum = document.getElementById('total_price');
totalSum.innerText = totalPrice;

//Создать функцию, которая будет вычитать 20%  от общей стоимости
//Добавить метод onclick или addEventListener на кнопку ”Использовать купон на 20%”
const button = document.querySelector('button');
button.addEventListener('click', function applyCoupon() {
    const discountedPrice = totalPrice * 0.8;
    totalSum.innerHTML = discountedPrice;
})

