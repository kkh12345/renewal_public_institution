const hdrElm = {
  navMenu: document.querySelectorAll(".nav>ul>li>a"),
  navSub: document.querySelectorAll(".sub"),
  searchIcon: document.querySelector(".hdr-search"),
  hamburger: document.querySelector(".hdr-hamburger"),
  hdr: document.querySelector("header"),
};
const searchModalElm = {
  searchModal: document.querySelector(".search-modal"),
  searchModalClose: document.querySelector(".search-modal-close "),
};
const asideElm = {
  aside: document.querySelector("aside"),
  asideMenu: document.querySelectorAll("aside>ul>li>a"),
  asideSub: document.querySelectorAll(".aside-sub"),
  asideClose: document.querySelector(".aside-close"),
};

//검색모달 띄우기
hdrElm.searchIcon.addEventListener("click", function () {
  searchModalElm.searchModal.classList.toggle("show");
  searchModalElm.searchModalClose.addEventListener("click", function () {
    searchModalElm.searchModal.classList.remove("show");
  });
});

//서브메뉴 띄우기
hdrElm.navMenu.forEach((a, i) => {
  a.addEventListener("mouseenter", function (e) {
    e.target.nextElementSibling.classList.add("slidedown");

    e.target.classList.add("slidedown");
  });
  a.addEventListener("mouseleave", function (e) {
    e.target.nextElementSibling.classList.remove("slidedown");
    e.target.classList.remove("slidedown");
  });
});
hdrElm.navSub.forEach((a, i) => {
  a.addEventListener("mouseenter", function (e) {
    a.classList.add("slidedown");

    e.target.previousElementSibling.classList.add("slidedown");
  });
  a.addEventListener("mouseleave", function (e) {
    a.classList.remove("slidedown");
    e.target.previousElementSibling.classList.remove("slidedown");
  });
});
//사이드바 띄우기
hdrElm.hamburger.addEventListener("click", function () {
  asideElm.aside.classList.add("show");
});
asideElm.asideMenu.forEach((a, i) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    asideElm.asideSub.forEach((b, i) => {
      if (e.target.nextElementSibling !== b) {
        b.classList.remove("slidedown");
      } else {
        e.target.nextElementSibling.classList.toggle("slidedown");
      }
    });
  });
});
asideElm.asideClose.addEventListener("click", function () {
  asideElm.aside.classList.remove("show");
});
//로드 시 헤더고정
function hdrFixed() {
  let hdrPosition = hdrElm.hdr.offsetTop;

  if (this.scrollY > hdrPosition) {
    hdrElm.hdr.previousElementSibling.display = "none";
    hdrElm.hdr.classList.add("fixed");
  }
}
//헤더 고정 함수실행
hdrFixed();
// 스크롤 시 헤더 고정
window.addEventListener("scroll", function () {
  let hdrPosition = hdrElm.hdr.offsetTop;
  if (this.scrollY > hdrPosition + 100) {
    hdrElm.hdr.previousElementSibling.display = "none";
    hdrElm.hdr.classList.add("fixed");
  } else {
    hdrElm.hdr.previousElementSibling.display = "block";
    hdrElm.hdr.classList.remove("fixed");
  }
});
//===================================================================//

const noticeLeftBox = {
  leftBox: document.querySelector(".notice-left-box"),
  tap: document.querySelectorAll(".notice-left-box>ul>li>a"),
  subLi: document.querySelectorAll(".notice-sub>li"),
};
const noticeRightBox = {
  subContent: document.querySelectorAll(".sub-content"),
  content: document.querySelector(".notice-right-top + div"),
  centralContent: document.querySelector(".central-content"),
};
//본부지부소식 서브메뉴 슬라이드다운

noticeLeftBox.leftBox.addEventListener("click", function (e) {
  console.log(e.target);
  let subLiArr = [...noticeLeftBox.subLi];
  if (
    //본부지부소식 탭 클릭하면
    e.target === noticeLeftBox.tap[1] &&
    e.target.classList.contains("selected")
  ) {
    e.preventDefault(); //a기본동작막고

    e.target.classList.toggle("slideDown"); //서브메뉴 펼치기/접기
    noticeRightBox.subContent.forEach((a, i) => {
      if (a.classList.contains("show")) {
        a.classList.remove("show");
        noticeRightBox.centralContent.classList.add("show");
      }
    }); //서브내용지우고 본부지부소식 보여주기
  } else if (subLiArr.includes(e.target)) {
    //서브메뉴중 하나 클릭하면
    noticeLeftBox.subLi.forEach((a, i) => {
      if (a === e.target) {
        a.classList.add("selected"); //클릭한 서브메뉴 글자색 바꿔주기
      } else {
        a.classList.remove("selected");
      }
    });

    let index = subLiArr.indexOf(e.target); //인덱스받아와서
    if (noticeRightBox.centralContent.classList.contains("show")) {
      noticeRightBox.centralContent.classList.remove("show");
    }
    //본부지부소식 내용 있으면 지우고
    noticeRightBox.subContent.forEach((a, i) => {
      //(인덱스)번째 서브내용 보여주기
      if (index === i) {
        a.classList.add("show");
      } else {
        a.classList.remove("show");
      }
    });
  }
});

//모바일에서 페이지버튼 호버이벤트

// console.log(ArrowBtn, pageBtns); //newsdata.js에 있는 변수

ArrowBtn.forEach((a) => {
  a.addEventListener("touchstart", function () {
    this.style.backgroundColor = "#eee";
  });
  a.addEventListener("touchend", function () {
    this.style.backgroundColor = "#fff";
  });
});
pageBtns.forEach((a) => {
  a.addEventListener("touchstart", function () {
    document.documentElement.style.setProperty(
      "--mobile-pageBtnHover-bg",
      "#eee"
    );
    document.documentElement.style.setProperty(
      "--mobile-pageBtnHover-color",
      "#000"
    );
  });
  a.addEventListener("touchend", function () {
    document.documentElement.style.setProperty(
      "--mobile-pageBtnHover-bg",
      "#2078bb"
    );
    document.documentElement.style.setProperty(
      "--mobile-pageBtnHover-color",
      "#fff"
    );
  });
});
