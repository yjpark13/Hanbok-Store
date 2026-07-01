const infoView = document.getElementById("infoView");
const infoEdit = document.getElementById("infoEdit");

const orderNumber = document.getElementById("orderNumber");
const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;

orderNumber.textContent = "HB" + randomNumber;

const changeInfoButton = document.getElementById("changeInfoButton");
const saveInfoButton = document.getElementById("saveInfoButton");

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