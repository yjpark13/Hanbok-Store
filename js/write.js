const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function () {

    const writer = document.getElementById("writer").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if(writer === "" || title === "" || content === ""){
        alert("모든 내용을 입력하세요.");
        return;
    }

    // 기존 글 목록 가져오기
    let boardList = JSON.parse(localStorage.getItem("boardList")) || [];

    // 오늘 날짜
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,"0");
    const day = String(today.getDate()).padStart(2,"0");

    // 게시글 객체
    const board = {
        writer : writer,
        title : title,
        content : content,
        date : `${year}-${month}-${day}`,
        views : 0
    };

    // 배열에 추가
    boardList.push(board);

    // localStorage 저장
    localStorage.setItem("boardList", JSON.stringify(boardList));

    // 게시판으로 이동
    location.href = "qna.html";
});