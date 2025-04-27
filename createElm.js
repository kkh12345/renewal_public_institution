//탭메뉴 공지사항,간행물 내용삼입

const news1Data = [
  {
    description: "[채용] 한국마약퇴치운동본부 2024년도 제11차 채용 공고",
    date: "2024-09-27",
  },
  {
    description:
      "	[모집] 한국마약퇴치운동본부 충남지부 함께한걸음센터 외부상담사 모집 공고	",
    date: "2024-09-26",
  },
  {
    description: "[모집] 한국마약퇴치운동본부 충남지부 재활교육 보조강사 모집",
    date: "2024-09-26",
  },
  {
    description:
      "[모집] 한국마약퇴치운동본부 경북지부 함께한걸음센터 외부상담사 모집 연장 공고",
    date: "2024-09-26",
  },
  {
    description:
      "[모집] 한국마약퇴치운동본부 대전지부 함께한걸음센터 외부상담사 모집 연장 공고",
    date: "2024-09-23",
  },
  {
    description: "[모집] 한국마약퇴치운동본부 경기지부 재활교육 보조강사 모집",
    date: "2024-09-20",
  },
  {
    description:
      "[모집] 한국마약퇴치운동본부 충북지부 함께한걸음센터 외부상담사 모집 연장 공고",
    date: "2024-09-19",
  },
];

const material1Data = [
  {
    description:
      "2022년도 마약류 심각성에 관한 국민 인식도 조사보고서 - <출처 : 식품의약품안전처>",
  },
  {
    description:
      "	2021년도 마약류 심각성에 관한 국민 인식도 조사보고서 - <출처 : 식품의약품안전처>	",
  },
  {
    description:
      "하수기반 역학 마약류 모니터링이란? - <출처: 식품의약품안전처>",
  },
  {
    description: "청소년 마약예방 홍보물(약국용)",
  },
  {
    description: "청소년 마약예방 홍보물(청소년용)",
  },
  {
    description:
      "2020년도 마약류 심각성에 관한 국민 인식도 조사보고서 - <출처 : 식품의약품안전처>",
  },
  {
    description: "2019년도 마약류 심각성에 관한 국민 인식도 조사보고서",
  },
  {
    description: "2018년도 마약류 심각성에 관한 국민 인식도 조사보고서",
  },
  {
    description: "[3단 전단] 마약류가 인체에 미치는 영향과 신종불법마약류",
  },
  {
    description: "2017년도 마약류 심각성에 관한 국민 인식도 조사보고서",
  },
];

const news1 = document.querySelector(".news-tap-content.news1");
const material1 = document.querySelector(".material-tap-content.material1");

news1Data.forEach((news, i) => {
  if (i < 5) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const descriptionSpan = document.createElement("span");
    const dateSpan = document.createElement("span");
    a.setAttribute("href", "#none");
    descriptionSpan.textContent = news.description;
    dateSpan.textContent = news.date;

    a.appendChild(descriptionSpan);
    a.appendChild(dateSpan);
    li.appendChild(a);
    news1.appendChild(li);
  }
});

material1Data.forEach((material, i) => {
  if (i < 5) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const descriptionSpan = document.createElement("span");
    a.setAttribute("href", "#none");
    descriptionSpan.textContent = material.description;

    a.appendChild(descriptionSpan);

    li.appendChild(a);
    material1.appendChild(li);
  }
});

//푸터 관련기관 슬라이드 요소 생성

const relatedSwiperWrapper = document.querySelector(
  ".relatedSwiper>.swiper-wrapper"
);
const footerSelect = document.querySelector(".ftop .selectGroup>select");

const relatedList = [
  {
    tit: "대한약사회",
    href: "https://www.kpanet.or.kr/",
    image: "images/related1.png",
  },
  {
    tit: "식품의약안전처",
    href: "https://www.mfds.go.kr/index.do",
    image: "images/related2.png",
  },
  {
    tit: "약사공론",
    href: "https://www.kpanews.co.kr/",
    image: "images/related3.png",
  },
  {
    tit: "abbvie",
    href: "https://www.abbvie.com/",
    image: "images/related4.png",
  },
  {
    tit: "환인제약",
    href: "https://www.whanin.com/",
    image: "images/related5.png",
  },
  {
    tit: "한국의약품수출입협회",
    href: "https://www.kpta.or.kr/",
    image: "images/related6.png",
  },
  {
    tit: "명인제약주식회사",
    href: "http://myunginph.co.kr/main/ko/index.html",
    image: "images/related7.png",
  },
];

relatedList.forEach((a, i) => {
  let swiperSlide = document.createElement("div");
  let hyperLink = document.createElement("a");
  let img = document.createElement("img");

  swiperSlide.classList.add("swiper-slide");
  hyperLink.setAttribute("href", `#none`);

  img.setAttribute("src", `${a.image}`);
  hyperLink.appendChild(img);
  swiperSlide.appendChild(hyperLink);
  relatedSwiperWrapper.appendChild(swiperSlide);

  // 푸터 관련기관 옵션태그 생성
  let option = document.createElement("option");
  option.value = `${a.href}`;
  option.innerHTML = `${a.tit}`;
  footerSelect.appendChild(option);
});
