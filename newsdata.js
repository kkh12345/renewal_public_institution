const newsArr = []; //공지사항

class newsdata {
  constructor(num, des, author, date, link) {
    this.num = num;

    this.description = des;
    this.author = author;
    this.date = date;
    this.link = link;
  }
}
for (let i = 1; i <= 100; i++) {
  let newsItem = new newsdata(
    i,
    `[채용] 한국마약퇴치운동본부 2024년도 제 (${i})차 채용 공고`,
    "관리자",
    "2024-09-27",
    ""
  );
  newsArr.push(newsItem);
}

//공지사항 내용넣기
function pushNewsContent() {
  const tbody = document.querySelector(".notice-content tbody");
  newsArr.forEach((a, i) => {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "");

    let tr = document.createElement("tr");

    td1.textContent = a.num;
    td2.appendChild(aTag);
    aTag.textContent = a.description;
    td3.textContent = a.author;
    td4.textContent = a.date;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  });
}
pushNewsContent();

//페이지네이션
let currentPage = 0;
let rowsPerPage = 8;
let pageNumber = Math.ceil(newsArr.length / rowsPerPage);

//버튼 만들기
let pageBtnUl = document.querySelector(".page-btnGroup>ul");
let result = "";
for (let i = 1; i <= pageNumber; i++) {
  result += `<li><button class="page-btn">${i}</button></li>`;
}
pageBtnUl.innerHTML = result;

const pageBtns = document.querySelectorAll(".page-btn");
pageBtns.forEach((a, i) => {
  a.addEventListener("click", function (e) {
    pageBtns.forEach((b) => {
      if (e.target !== b) {
        b.classList.remove("active");
      } else {
        b.classList.add("active");
      }
    });
    displayRow(i);
    currentPage = i;
  });
});

function displayRow(i) {
  let start = i * rowsPerPage;
  let end = start + rowsPerPage;
  let tr = document.querySelectorAll(".notice-content tbody tr");
  let trArr = [...tr];
  let slice = trArr.slice(start, end);
  trArr.forEach((b) => {
    b.style.display = "none";
  });
  slice.forEach((b) => {
    b.style.display = "";
  });
}

//처음페이지
pageBtns[0].classList.add("active");
displayRow(0);

//뒤로가기,앞으로가기,첫페이지로가기,끝페이지로가기
const ArrowBtn = document.querySelectorAll(".page-btnGroup>button");
ArrowBtn.forEach((a, i) => {
  a.addEventListener("click", function (e) {
    if (e.target === ArrowBtn[0]) {
      currentPage = 0;
      displayRow(0);
    } else if (e.target === ArrowBtn[1]) {
      if (currentPage <= 0) {
        currentPage = 0;
      } else {
        currentPage = currentPage - 1;
      }
      displayRow(currentPage);
    } else if (e.target === ArrowBtn[2]) {
      if (currentPage === pageNumber - 1) {
        currentPage = pageNumber - 1;
      } else {
        currentPage = currentPage + 1;
      }

      displayRow(currentPage);
    } else if (e.target === ArrowBtn[3]) {
      currentPage = pageNumber - 1;
      displayRow(currentPage);
    }

    //버튼 active
    pageBtns.forEach((b) => {
      b.classList.remove("active");
    });
    pageBtns[currentPage].classList.add("active");
  });
});
