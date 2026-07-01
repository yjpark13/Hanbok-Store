const joinForm = document.getElementById("joinForm");

const userName = document.getElementById("userName");
const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");
const userPwCheck = document.getElementById("userPwCheck");

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const postcode = document.getElementById("postcode");
const address = document.getElementById("address");
const detailAddress = document.getElementById("detailAddress");

const agreeCheck = document.getElementById("agreeCheck");

joinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userNameValue = userName.value.trim();
  const userIdValue = userId.value.trim();
  const userPwValue = userPw.value.trim();
  const userPwCheckValue = userPwCheck.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const postcodeValue = postcode.value.trim();
  const addressValue = address.value.trim();
  const detailAddressValue = detailAddress.value.trim();

  //이름 유효성 검사
  if (userNameValue === "") {
    alert("이름을 입력해주세요.");
    userName.focus();
    return;
  }
  const userNamePattern = /^[가-힣]{2,7}$/;
  if (!userNamePattern.test(userNameValue)) {
    alert("이름은 한글 2~7자리여야 합니다.");
    userName.focus();
    return;
  }

  //아이디 유효성 검사
  if (userIdValue === "") {
    alert("아이디를 입력해주세요.");
    userId.focus();
    return;
  }
  const userIdPattern = /^[a-zA-Z0-9]{4,12}$/;

  if (!userIdPattern.test(userIdValue)) {
    alert(
      "아이디는 영문 대소문자와 숫자만 사용 가능하며, 4~12자리여야 합니다.",
    );
    userId.focus();
    return;
  }

  //비밀번호 유효성 검사
  if (userPwValue === "") {
    alert("비밀번호를 입력해주세요.");
    userPw.focus();
    return;
  }

  const userPwPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  if (!userPwPattern.test(userPwValue)) {
    alert(
      "비밀번호는 영문 대소문자, 숫자, 특수문자(!@#$%^&*)를 포함하여 8~20자리여야 합니다.",
    );
    userPw.focus();
    return;
  }
  //이후 비밀번호 확인 입력란
  if (userPwCheckValue === "") {
    alert("비밀번호 확인을 입력해주세요.");
    userPwCheck.focus();
    return;
  }

  if (userPwValue !== userPwCheckValue) {
    alert("비밀번호가 일치하지 않습니다.");
    userPwCheck.focus();
    return;
  }

  //이메일 확인은 html에서 해주는 것으로 충분하다고 판단하여 생략.
  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
    email.focus();
    return;
  }

  //전화번호 유효성 검사
  if (phoneValue === "") {
    alert("전화번호를 입력해주세요.");
    phone.focus();
    return;
  }
  const phonePattern = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
  if (!phonePattern.test(phoneValue)) {
    alert("전화번호는 000-0000-0000 형식이어야 합니다.");
    phone.focus();
    return;
  }

  //우편번호 검사
  if (postcodeValue === "") {
    alert("우편번호를 입력해주세요.");
    postcode.focus();
    return;
  }

  const postcodePattern = /^[0-9]{5}$/;
  if (!postcodePattern.test(postcodeValue)) {
    alert("우편번호는 5자리 숫자여야 합니다.");
    postcode.focus();
    return;
  }

  //주소 검사
  if (addressValue === "") {
    alert("주소를 입력해주세요.");
    address.focus();
    return;
  }

  //짭약관동의
  if (!agreeCheck.checked) {
    alert("약관에 동의해주세요.");
    agreeCheck.focus();
    return;
  }

  //회원가입ㅠ
  if (!confirm("회원가입을 진행하시겠습니까?")) {
    return;
  }

  //회원가입 정보 객체 생성.
  const member = {
    userName: userNameValue,
    userId: userIdValue,
    userPw: userPwValue,
    email: emailValue,
    phone: phoneValue,
    postcode: postcodeValue,
    address: addressValue,
    detailAddress: detailAddressValue,
    loginType: "normal",
    provider: "일반 가입",

    // 약관 동의 여부를 확인하는 부분, true가 될 수밖에 없으므로 필요는 없으나 유지보수를 위해 넣음.
    termsAgreed: agreeCheck.checked,
  };

  console.log(member);

  //로컬에 저장
  localStorage.setItem("member", JSON.stringify(member));

  alert("회원가입이 완료되었습니다.");
  location.href = "login.html";
});
