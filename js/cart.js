const allCheck = document.getElementById('allCheck');
const deleteButton = document.getElementById('deleteButton');
const itemChecks = document.querySelectorAll('.item-check');

allCheck.addEventListener("change", function() {
    itemChecks.forEach(function(check) {
        check.checked = allCheck.checked;
        updateTotalPrice();
    });
});

deleteButton.addEventListener("click", function() {
    itemChecks.forEach(function(check) {
        if (check.checked) {
            check.closest('.cart-item').remove();
        }
        updateTotalPrice();
    });
});

const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.closest('.cart-item').remove();
        updateTotalPrice();
    });
});

const plusButtons = document.querySelectorAll('.plus-button');
const minusButtons = document.querySelectorAll('.minus-button');
const quantityInputs = document.querySelectorAll('.quantity-input');

plusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        quantityInputs[index].value++;
        updateTotalPrice();
    });
});
minusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        quantityInputs[index].value--;
        if (quantityInputs[index].value < 1) {
            quantityInputs[index].value = 1;
            alert("수량을 1개 이상으로 설정해주세요.");
        }
        updateTotalPrice();
    });
    
});


const prices = document.querySelectorAll('.price');
const itemTotals = document.querySelectorAll('.item-price-total');

const productPrice = document.getElementById('productPrice');
const totalPrice = document.getElementById('totalPrice');
const point = document.getElementById('point');

function updateTotalPrice() {

    let sum = 0;

    prices.forEach(function(price, index) { 
        const itemPrice = Number(price.textContent.replace(",", ""));
        const quantity = Number(quantityInputs[index].value);
        const total = itemPrice * quantity;
        itemTotals[index].textContent = total.toLocaleString() + "원";
        
        sum += total;
    });

    productPrice.textContent = sum.toLocaleString() + "원";
    totalPrice.textContent = sum.toLocaleString() + "원";
    point.textContent = Math.floor(sum * 0.01) + "P";
}



