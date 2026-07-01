const infoView = document.getElementById("infoView");
const infoEdit = document.getElementById("infoEdit");

const changeInfoButton = document.getElementById("changeInfoButton");
const saveInfoButton = document.getElementById("saveInfoButton");
const paymentButton = document.getElementById("paymentButton");

const infoName = document.getElementById("infoName");
const infoTel = document.getElementById("infoTel");
const infoEmail = document.getElementById("infoEmail");
const infoAddress = document.getElementById("infoAddress");
const infoMemo = document.getElementById("infoMemo");

const viewName = document.getElementById("viewName");
const viewTel = document.getElementById("viewTel");
const viewEmail = document.getElementById("viewEmail");
const viewAddress = document.getElementById("viewAddress");
const viewMemo = document.getElementById("viewMemo");

const plusButtons = document.querySelectorAll(".plus-button");
const minusButtons = document.querySelectorAll(".minus-button");
const quantityInputs = document.querySelectorAll(".quantity-input");
const prices = document.querySelectorAll(".price");
const itemTotals = document.querySelectorAll(".item-price-total");

const productPrice = document.getElementById("productPrice");
const totalPrice = document.getElementById("totalPrice");

infoEdit.style.display = "none";

changeInfoButton.addEventListener("click", function() {
    infoView.style.display = "none";
    infoEdit.style.display = "block";
});

saveInfoButton.addEventListener("click", function() {
    if (
        infoName.value === "" ||
        infoTel.value === "" ||
        infoEmail.value === "" ||
        infoAddress.value === ""
    ) {
        alert("주문자 정보를 모두 입력해주세요.");
        return;
    }

    viewName.textContent = infoName.value;
    viewTel.textContent = infoTel.value;
    viewEmail.textContent = infoEmail.value;
    viewAddress.textContent = infoAddress.value;
    viewMemo.textContent = infoMemo.value;

    infoEdit.style.display = "none";
    infoView.style.display = "block";
});

function updateTotal() {
    let sum = 0;

    prices.forEach(function(price, index) {
        const itemPrice = Number(price.textContent);
        const quantity = Number(quantityInputs[index].value);
        const itemTotal = itemPrice * quantity;

        itemTotals[index].textContent = itemTotal.toLocaleString() + "원";
        sum += itemTotal;
    });

    productPrice.textContent = sum.toLocaleString() + "원";
    totalPrice.textContent = sum.toLocaleString() + "원";
}

plusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        quantityInputs[index].value++;
        updateTotal();
    });
});

minusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (quantityInputs[index].value > 1) {
            quantityInputs[index].value--;
        } else {
            alert("수량은 1개 이상이어야 합니다.");
        }

        updateTotal();
    });
});

paymentButton.addEventListener("click", function() {
    const paymentMethod = document.querySelector("input[name='payment']:checked");

    if (
        infoName.value === "" ||
        infoTel.value === "" ||
        infoEmail.value === "" ||
        infoAddress.value === "" ||
        paymentMethod === null
    ) {
        alert("주문자 정보와 결제 방법을 확인해주세요.");
        return;
    }

    location.href = "order-result.html";
});

updateTotal();