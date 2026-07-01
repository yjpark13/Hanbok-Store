const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");

//소셜로그인은 더미로 해서 필수사항들에 기본저장정보?를 넣을것임.
const kakaoLoginBtn = document.getElementById("kakaoLoginBtn");
const naverLoginBtn = document.getElementById("naverLoginBtn");
const googleLoginBtn = document.getElementById("googleLoginBtn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginIdValue = loginId.value.trim(); //로그인 창에 들어온 아이디값
  const loginPwValue = loginPw.value.trim(); //로그인 창에 들어온 비번값

  if (loginIdValue === "") {
    alert("아이디를 입력해주세요.");
    loginId.focus();
    return;
  }

  if (loginPwValue === "") {
    alert("비밀번호를 입력해주세요.");
    loginPw.focus();
    return;
  }

  const savedMember = JSON.parse(localStorage.getItem("member")); //회원가입 페이지 로컬 저장 정보 가져오기

  if (savedMember === null) {
    alert("가입된 회원정보가 없습니다. 회원가입을 진행해주세요.");
    return;
  }

  if (
    savedMember.userId !== loginIdValue ||
    savedMember.userPw !== loginPwValue
  ) {
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    loginId.focus();
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(savedMember));
  //현재유저와 가입유저에 대해서 좀 구분하려고...
  //미래에는 오라클과 연결할날이오겠죠...
  alert("로그인 성공!");

  location.href = "../html/mypage.html";
});

//소셜로그인 연동버튼들...
kakaoLoginBtn.addEventListener("click", () => {
  const kakaoMember = {
    userName: "카카오회원",
    userId: "kakaoUser",
    userPw: "kakao1234!",
    email: "kakao@example.com",
    phone: "010-1111-1111",
    postcode: "12345",
    address: "카카오 기본 주소",
    detailAddress: "",
    loginType: "social",
    provider: "카카오",
    termsAgreed: true,
  };

  localStorage.setItem("member", JSON.stringify(kakaoMember));
  //카카오 더미회원정보 즉시 생성해 저장, 물론 이걸 할 경우 가입했던 member가 덮어씌워져서 못씁니다
  localStorage.setItem("currentUser", JSON.stringify(kakaoMember));
  //카카오 더미회원정보에서 현재 유저<를 가지고옴.
  //시간관계상 약관페이지를 보여주고 확인받는건 생략..양이 너무 많아요

  alert("짭카오 로그인 성공!");
  location.href = "../html/mypage.html";
});

naverLoginBtn.addEventListener("click", () => {
  const naverMember = {
    userName: "네이버회원",
    userId: "naverUser",
    userPw: "naver1234!",
    email: "naver@example.com",
    phone: "010-1111-1111",
    postcode: "12345",
    address: "네이버 기본 주소",
    detailAddress: "",
    loginType: "social",
    provider: "네이버",
    termsAgreed: true,
  };

  localStorage.setItem("member", JSON.stringify(naverMember));
  localStorage.setItem("currentUser", JSON.stringify(naverMember));

  alert("짭네이버 로그인 성공!");
  location.href = "mypage.html";
});

googleLoginBtn.addEventListener("click", () => {
  const googleMember = {
    userName: "구글회원",
    userId: "googleUser",
    userPw: "google1234!",
    email: "google@example.com",
    phone: "010-1111-1111",
    postcode: "12345",
    address: "구글 기본 주소",
    detailAddress: "",
    loginType: "social",
    provider: "구글",
    termsAgreed: true,
  };

  localStorage.setItem("member", JSON.stringify(googleMember));
  localStorage.setItem("currentUser", JSON.stringify(googleMember));

  alert("짭글 로그인 성공!");
  location.href = "mypage.html";
});

registerBtn.addEventListener("click", () => {
  location.href = "join.html";
});
