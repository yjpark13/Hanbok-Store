const writeDate = document.getElementById("writeDate");
const today = new Date();
const noticeLink = document.getElementById("noticeLink");

const date = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
writeDate.textContent = `${date}`;


const views = document.getElementById("views");
let count = 0;

views.textContent = count;

noticeLink.addEventListener("click", function() {
   count++;
});

const writeBtn = document.getElementById("writeBtn");
const writeForm = document.getElementById("writeForm");
const cancelBtn = document.getElementById("cancelBtn");

writeBtn.addEventListener("click", () => {
    if (writeForm.style.display === "none") {
        writeForm.style.display = "block";
    } else {
        writeForm.style.display = "none";
    }
});

cancelBtn.addEventListener("click", () => {
    writeForm.style.display = "none";
});

const saveBtn = document.getElementById("saveBtn");
const boardBody = document.getElementById("boardBody");

let postNo = 1;

saveBtn.addEventListener("click", () => {
    const writer = document.getElementById("writer").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (writer === "" || title === "" || content === "") {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    const date = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${postNo++}</td>
        <td class="title">${title}</td>
        <td>${writer}</td>
        <td>${date}</td>
        <td>0</td>
    `;

    boardBody.appendChild(tr);

    document.getElementById("writer").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    writeForm.style.display = "none";
});

