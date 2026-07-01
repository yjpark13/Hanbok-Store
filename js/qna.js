const writeDate = document.getElementById("writeDate");
const today = new Date();
const noticeLink = document.getElementById("noticeLink");

const date = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
writeDate.textContent = `${date}`;


const views = document.getElementById("views");
let count = Number(localStorage.getItem("noticeViews")) || 0;

views.textContent = count;

noticeLink.addEventListener("click", function() {
   count++;
   localStorage.setItem("noticeViews", count);
   views.textContent = count;
});

const writeBtn = document.getElementById("writeBtn");
const writeForm = document.getElementById("writeForm");
const cancelBtn = document.getElementById("cancelBtn");

writeBtn.addEventListener("click", function() {
    if (writeForm.style.display === "none") {
        writeForm.style.display = "block";
    } else {
        writeForm.style.display = "none";
    }
});

cancelBtn.addEventListener("click", function() {
    writeForm.style.display = "none";
});

const saveBtn = document.getElementById("saveBtn");
const boardBody = document.getElementById("boardBody");

let postNo = 1;
let posts = [];

saveBtn.addEventListener("click", function() {
    const writer = document.getElementById("writer").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (writer === "" || title === "" || content === "") {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    const post = {
        no: postNo++,
        writer,
        title,
        content,
        date,
        views: 0
    };

    posts.push(post);
    renderPosts();

    document.getElementById("writer").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    writeForm.style.display = "none";
});

function renderPosts() {

    boardBody.innerHTML = `
        <tr class="notice">
            ${boardBody.querySelector(".notice").innerHTML}
        </tr>
    `;

    posts.forEach(function(post) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${post.no}</td>
            <td class="title" data-id="${post.id}" style="cursor:pointer;">
                ${post.title}
            </td>
            <td>${post.writer}</td>
            <td>${post.date}</td>
            <td class="views">${post.views}</td>
        `;

        boardBody.appendChild(tr);

        // 클릭 이벤트 (내용 펼치기)
        const titleCell = tr.querySelector(".title");

        titleCell.addEventListener("click", function() {
            post.views++;

            tr.querySelector(".views").textContent = post.views;

            const existing = document.getElementById(`content-${post.no}`);

            if (existing) {
                existing.remove();
            } else {
                const contentTr = document.createElement("tr");

                contentTr.id = `content-${post.no}`;
                contentTr.innerHTML = `
                    <td colspan="5" style="padding:15px;">
                        ${post.content}
                    </td>
                `;

                tr.after(contentTr);
            }
        });
    });
}

