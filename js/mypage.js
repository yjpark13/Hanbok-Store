const mypageBox = document.querySelector(".mypage-box");

const currentUserData = localStorage.getItem("currentUser");
//배열을 일단 불러옴..

const userName = document.getElementById("userName");
const userId = document.getElementById("userId");
const userEmail = document.getElementById("email");
const userPhone = document.getElementById("phoneNumber");
const userPostcode = document.getElementById("postcode");
const userAddress = document.getElementById("address");
const userDetailAddress = document.getElementById("detailAddress");
const logintype = document.getElementById("loginType");
const provider = document.getElementById("provider");

const logoutBtn = document.getElementById("logoutBtn");

if (currentUserData === null) {
  alert("로그인이 필요합니다.");
  location.href = "login.html";
} else {
  const currentUser = JSON.parse(currentUserData);
  //배열에서 객체로 땅김..

  userName.textContent = currentUser.userName;
  userId.textContent = currentUser.userId;
  userEmail.textContent = currentUser.email;
  userPhone.textContent = currentUser.phone;
  userPostcode.textContent = currentUser.postcode;
  userAddress.textContent = currentUser.address;
  userDetailAddress.textContent = currentUser.detailAddress;
  logintype.textContent = currentUser.loginType;
  provider.textContent = currentUser.provider;
}

logoutBtn.addEventListener("click", () => {
  if (confirm("로그아웃 하시겠습니까?")) {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
  }
});
