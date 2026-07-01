const today = new Date();

const writeBtn = document.getElementById("writeBtn");
const writeForm = document.getElementById("writeForm");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const reviewBody = document.getElementById("reviewBody");
const title = document.querySelector(".title-link");
const viewCell = document.querySelector(".views");

let views = 0;
let reviewNo = 2;
let reviews = [];

title.addEventListener("click", function () {
    views++;
    viewCell.textContent = views;
});

// 작성폼 열기
writeBtn.addEventListener("click", function() {
    writeForm.style.display =
        writeForm.style.display === "none" ? "block" : "none";
});

// 취소
cancelBtn.addEventListener("click", function() {
    writeForm.style.display = "none";
});

// 등록
saveBtn.addEventListener("click", function() {

    const writer = document.getElementById("writer").value.trim();
    const productImage = document.getElementById("productImage");
    const title = document.getElementById("title").value.trim();
    const rating = document.getElementById("rating").value;
    const content = document.getElementById("content").value.trim();
    const file = productImage.files[0];

    if (writer === "" || !file || title === "" || content === "") {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

    const post = {
            no: reviewNo++,
            id: Date.now(),
            writer: writer,
            productImage: e.target.result,
            title: title,
            rating: rating,
            content: content,
            date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`,
            views: 0
        };

        reviews.unshift(post);

        renderReviews();

        // 입력창 초기화
        document.getElementById("writer").value = "";
        document.getElementById("productImage").value = "";
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";

        writeForm.style.display = "none";
    };

    reader.readAsDataURL(file);
});

function renderReviews(){

    reviewBody.innerHTML="";

    reviews.forEach(function(post) {

        const tr=document.createElement("tr");

        tr.innerHTML=`
            <td>${post.no}</td>
            <td><img src="${post.productImage}" alt="상품사진"></td>

            <td class="title" style="cursor:pointer;">
                ${post.title}
            </td>

            <td>${"★".repeat(post.rating)}${"☆".repeat(5-post.rating)}</td>

            <td>${post.writer}</td>

            <td>${post.date}</td>

            <td>${post.views}</td>
        `;

        reviewBody.appendChild(tr);

        const title=tr.querySelector(".title");

        title.addEventListener("click",()=>{

            post.views++;

            renderReviews();

            const detail=document.createElement("tr");

            detail.className="review-detail";

            detail.innerHTML=`
                <td colspan="7">

                    <h3>${post.title}</h3>

                    <br>

                    <strong>상품명</strong>
                    ${post.product}

                    <br><br>

                    <strong>평점</strong>
                    ${"★".repeat(post.rating)}${"☆".repeat(5-post.rating)}

                    <br><br>

                    ${post.content}

                </td>
            `;

            tr.after(detail);

        });

    });

}