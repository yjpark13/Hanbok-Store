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

  //회원가입 진행. 회원가입 정보 객체.

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

  if (userNameValue === "") {
    alert("이름을 입력해주세요.");
    userName.focus();
    return;
  }

  if (userIdValue === "") {
    alert("아이디를 입력해주세요.");
    userId.focus();
    return;
  }

  if (userPwValue === "") {
    alert("비밀번호를 입력해주세요.");
    userPw.focus();
    return;
  }

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

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
    email.focus();
    return;
  }

  if (phoneValue === "") {
    alert("전화번호를 입력해주세요.");
    phone.focus();
    return;
  }

  if (postcodeValue === "") {
    alert("우편번호를 입력해주세요.");
    postcode.focus();
    return;
  }

  if (addressValue === "") {
    alert("주소를 입력해주세요.");
    address.focus();
    return;
  }

  if (detailAddressValue === "") {
    alert("상세주소를 입력해주세요.");
    detailAddress.focus();
    return;
  }

  if (!agreeCheck.checked) {
    alert("약관에 동의해주세요.");
    agreeCheck.focus();
    return;
  }
  //제약조건 설정

  //이름
  const userNamePattern = /^[가-힣]{2,7}$/;
  if (!userNamePattern.test(userNameValue)) {
    alert("이름은 한글 2~7자리여야 합니다.");
    userName.focus();
    return;
  }
  //아이디
  const userIdPattern = /^[a-zA-Z0-9]{4,12}$/;
  if (!userIdPattern.test(userIdValue)) {
    alert(
      "아이디는 영문 대소문자와 숫자만 사용 가능하며, 4~12자리여야 합니다.",
    );
    userId.focus();
    return;
  }

  //비밀번호
  const userPwPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  if (!userPwPattern.test(userPwValue)) {
    alert(
      "비밀번호는 영문 대소문자, 숫자, 특수문자(!@#$%^&*)를 포함하여 8~20자리여야 합니다.",
    );
    userPw.focus();
    return;
  }

  if (!confirm("회원가입을 진행하시겠습니까?")) {
    return;
  }

  console.log(member);
});
