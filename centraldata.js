const centralArr = []; //본부지부소식

class centraldata {
  constructor(image, title, des, date) {
    this.image = image;
    this.title = title;
    this.description = des;
    this.date = date;
  }
}
for (let i = 1; i <= 50; i++) {
  let centralItem = new centraldata(
    "images/news2 img1.png",
    `(${i}) 마약퇴치 전문교육원 정재훈 원장 마약관련 정기 연재글`,
    "아래 내용은 마약퇴치 전문교육원 정재훈 원장(전북대학교 약학대학 교수)이 약사신문에 '국민 보건을 위한 마약류의 규제와 활용' 이란 주제로 정기연재한 내용입니다.",
    "2023-05-24"
  );
  centralArr.push(centralItem);
}

//본부지부소식 내용넣기
function pushCentralContent() {
  let result = "";
  centralArr.forEach((a, i) => {
    result += `<li>
              <div class="imgWrap">
                <img src="${a.image}" alt="" />
              </div>
              <div class="txt">
                <h3>
                  <a href="#none">${a.title}</a>
                </h3>
                <p>
                  <a href="#none">${a.description}</a>
                </p>
                <p>
                  <a href="" class="date">${a.date}</a><a href="#none">read more >></a>
                </p>
              </div>
            </li>`;
  });
  document.querySelector(".central-content>ul").innerHTML = result;
}
pushCentralContent();

//페이지네이션
let currentPage = 0;
let rowsPerPage = 4;
let pageNumber = Math.ceil(centralArr.length / rowsPerPage);

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
  let li = document.querySelectorAll(".central-content ul>li");
  let liArr = [...li];
  let slice = liArr.slice(start, end);
  liArr.forEach((b) => {
    b.style.display = "none";
  });
  slice.forEach((b) => {
    b.style.display = "";
  });
}

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

//처음에 0페이지 보여주기
pageBtns[0].classList.add("active");
displayRow(0);
