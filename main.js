const searchModalElm = {
  searchModal: document.querySelector('.search-modal'),
  searchModalClose: document.querySelector('.search-modal-close '),
};
const asideElm = {
  aside: document.querySelector('aside'),
  asideMenu: document.querySelectorAll('aside>ul>li>a'),
  asideSub: document.querySelectorAll('.aside-sub'),
  asideClose: document.querySelector('.aside-close'),
};
const branchBoxElm = {
  branchBox: document.querySelector('.branch-box'),
  branchBoxH1: document.querySelector('.branch-box h1'),
  branchBoxMenu: document.querySelector('.branch-box-menu'),
};
const branchModalElm = {
  branchModal: document.querySelector('.branch-modal'),
  branchModalClose: document.querySelector('.branch-modal-close'),
  branchModalShortcut: document.querySelector('.branch-box button'),
};

const hdrElm = {
  navMenu: document.querySelectorAll('.nav>ul>li>a'),
  navSub: document.querySelectorAll('.sub'),
  searchIcon: document.querySelector('.hdr-search'),
  hamburger: document.querySelector('.hdr-hamburger'),
  hdr: document.querySelector('header'),
};
const tapElm = {
  newsMenuTitle: document.querySelectorAll('.news-menu h2 a'),
  materialMenuTitle: document.querySelectorAll('.material-menu h2 a'),
  newsTapContent: document.querySelectorAll('.news-tap-content'),
  materialTapContent: document.querySelectorAll('.material-tap-content'),
  newsViewMoreBtn: document.querySelector('.news-menu .view_more-btn'),
  materialViewMoreBtn: document.querySelector('.material-menu .view_more-btn'),
};
const relatedPauseBtn = document.querySelector(
  '.related_organization .swiper-button-pause'
);
const topBtn = document.querySelector('.top-btn');

//로드or스크롤 시 애니메이션
const section = {
  mainVisual: document.querySelector('.main-visual'),
  recovery: document.querySelector('.recovery'),
  support: document.querySelector('.support'),
  dayOfEradication: document.querySelector('.day_of_eradication'),
  youtube: document.querySelector('.youtube'),
  tap: document.querySelector('.tap'),
  socialIcon: document.querySelector('.social-icon'),
};

function scrollAni() {
  for (key in section) {
    let rect = section[key].getBoundingClientRect();
    if (rect.top + rect.height * 0.5 < this.innerHeight) {
      if (!section[key].classList.contains('scrollAni')) {
        section[key].classList.add('scrollAni');
      }
    }
  }
}

function loadAni() {
  for (key in section) {
    let rect = section[key].getBoundingClientRect();
    if (rect.top < this.innerHeight) {
      section[key].classList.add('scrollAni');
    }
  }
}
//로드,스크롤 이벤트,함수 실행
loadAni();
window.addEventListener('scroll', scrollAni);

//top버튼
topBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//푸터 옵션선택 후 이동버튼 클릭
footerSelect.addEventListener('change', function () {
  this.nextElementSibling.setAttribute('href', `${this.value}`);
  this.nextElementSibling.setAttribute('target', '_blank');
});

//정지,시작버튼
relatedPauseBtn.addEventListener('click', function () {
  if (this.classList.contains('swiper-button-pause')) {
    this.classList.remove('swiper-button-pause');
    this.classList.add('swiper-button-play');
    relatedSwiper.autoplay.stop();
  } else {
    this.classList.remove('swiper-button-play');
    this.classList.add('swiper-button-pause');
    relatedSwiper.autoplay.start();
  }
});

//로드 시 헤더고정
function hdrFixed() {
  let hdrPosition = hdrElm.hdr.offsetTop;
  if (this.scrollY > hdrPosition + 60) {
    hdrElm.hdr.previousElementSibling.display = 'none';
    hdrElm.hdr.classList.add('fixed');
  }
}
//헤더 고정 함수실행
hdrFixed();
//스크롤 시 헤더 고정
window.addEventListener('scroll', function () {
  let hdrPosition = hdrElm.hdr.offsetTop;
  if (this.scrollY > hdrPosition + 60) {
    hdrElm.hdr.previousElementSibling.display = 'none';
    if (!hdrElm.hdr.classList.contains('fixed')) {
      hdrElm.hdr.classList.add('fixed');
    }
  } else {
    hdrElm.hdr.previousElementSibling.display = 'block';
    if (hdrElm.hdr.classList.contains('fixed')) {
      hdrElm.hdr.classList.remove('fixed');
    }
  }
});

//소식,자료실 탭메뉴,
function tapFunction(title, content) {
  tapElm[title].forEach((a, i) => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      //탭메뉴 더보기 버튼 링크 바꾸기
      if (title === 'newsMenuTitle') {
        tapElm['newsViewMoreBtn'].setAttribute('href', e.target.dataset.link);
      }
      tapElm[title].forEach((b, i) => {
        if (b !== e.target) {
          b.classList.remove('active');
        } else {
          b.classList.add('active');
        }
      });
      tapElm[content].forEach((c, i) => {
        c.style.display = 'none';
      });
      tapElm[content][i].style.display = 'block';
    });
  });
}

//탭메뉴 함수실행
tapFunction('newsMenuTitle', 'newsTapContent');
tapFunction('materialMenuTitle', 'materialTapContent');

//서브메뉴 띄우기
hdrElm.navMenu.forEach((a, i) => {
  a.addEventListener('mouseenter', function (e) {
    e.target.nextElementSibling.classList.add('slidedown');

    e.target.classList.add('slidedown');
  });
  a.addEventListener('mouseleave', function (e) {
    e.target.nextElementSibling.classList.remove('slidedown');
    e.target.classList.remove('slidedown');
  });
});
hdrElm.navSub.forEach((a, i) => {
  a.addEventListener('mouseenter', function (e) {
    a.classList.add('slidedown');

    e.target.previousElementSibling.classList.add('slidedown');
  });
  a.addEventListener('mouseleave', function (e) {
    a.classList.remove('slidedown');
    e.target.previousElementSibling.classList.remove('slidedown');
  });
});

//검색모달 띄우기
hdrElm.searchIcon.addEventListener('click', function () {
  searchModalElm.searchModal.classList.toggle('show');
  searchModalElm.searchModalClose.addEventListener('click', function () {
    searchModalElm.searchModal.classList.remove('show');
  });
});

//사이드바 띄우기
hdrElm.hamburger.addEventListener('click', function () {
  asideElm.aside.classList.add('show');
});
asideElm.asideMenu.forEach((a, i) => {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    asideElm.asideSub.forEach((b, i) => {
      if (e.target.nextElementSibling !== b) {
        b.classList.remove('slidedown');
      } else {
        e.target.nextElementSibling.classList.toggle('slidedown');
      }
    });
  });
});
asideElm.asideClose.addEventListener('click', function () {
  asideElm.aside.classList.remove('show');
});

//지부바로가기 모달 띄우기
branchModalElm.branchModalShortcut.addEventListener('click', function () {
  if (window.innerWidth > 1024) {
    branchModalElm.branchModal.classList.add('show');
  }
});
branchModalElm.branchModalClose.addEventListener('click', function () {
  branchModalElm.branchModal.classList.remove('show');
});

//지부바로가기 1024px미만일떄
branchBoxElm.branchBoxH1.addEventListener('click', function () {
  if (window.innerWidth < 1024) {
    this.classList.toggle('rotate'); //화살표돌리기
    branchBoxElm.branchBoxMenu.classList.toggle('show');
  }
});
window.addEventListener('resize', function () {
  if (this.innerWidth < 1024) {
    branchModalElm.branchModal.classList.remove('show');
  } else {
    branchBoxElm.branchBoxMenu.classList.remove('show');
    branchBoxElm.branchBoxH1.classList.remove('rotate');
    asideElm.aside.classList.remove('show');
    console.log(2);
  }
});
