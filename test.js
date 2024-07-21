const button = document.querySelector('button');
const totalPriceElement = document.getElementById('total_price');
const discount = 0.2;
let stringPriceArray = document.querySelectorAll('.price');

////////////////////////////////////////////////////

let numberPriceArray = Array.from(stringPriceArray, item => Number(item.textContent));

let totalPrice = 0;
numberPriceArray.forEach(number => totalPrice += number
);
totalPriceElement.innerText = totalPrice;

////////////////////////////////////////////////////

let discountApplied = false;

button.addEventListener('click', function calculateTotalPriceWithDiscount() {
    if (discountApplied) {
        return;
    }

    ////////////////////////////////////////////////////

    let discountedResult = 0;
    let newPriceElement;

    for (let i = 0; i < numberPriceArray.length; i++) {
        numberPriceArray[i] = (numberPriceArray[i] * (1 - discount)).toFixed(2);
        discountedResult += +numberPriceArray[i];

        newPriceElement = document.createElement('span');
        newPriceElement.textContent = ` ${numberPriceArray[i]}`;
        document.getElementById(i).insertAdjacentElement('afterend', newPriceElement);
        document.getElementById(i).classList.add('line-through');
    }

    totalPriceElement.textContent = discountedResult;

    discountApplied = true;
});