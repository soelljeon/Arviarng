const cousor = document.querySelector(".cousor");
// // 원형 25px의 절반 -> cuusor 중앙으로 배치 ->cusor가 안먹힘..?
const animateCursor = (e) => {
  cousor.style.left = `${e.pageX - 16}px`;
  cousor.style.top = `${e.pageY - 16}px`;
};

window.addEventListener("mousemove", animateCursor);

// header .top_banner03
var swiper0 = new Swiper(".top_banner03", {
  loop: true,
  speed: 16000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
});
// sec2 event banner
var swiper1 = new Swiper(".sec2_event", {
  loop: true,
  speed: 10000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 0,
});
var swiper2 = new Swiper(".event_con", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
var swiper3 = new Swiper(".event_con2", {
  slidesPerView: 1.8,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  slidesPerView: 2.8,
  spaceBetween: 0,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
// 두개의 슬라이드 control 기능 연결
swiper2.controller.control = swiper3;
swiper3.controller.control = swiper2;
// sec5
var swiper4 = new Swiper(".sec5_slide", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".pg02",
  },
});
// sec6
var swiper6 = new Swiper(".sec6_slide", {
  slidesPerView: "5",
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".next6",
    prevEl: ".prev6",
  },
});
// cookie
$(function () {
  // 보이기 | 숨기기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 3000) {
      $(".cookie").fadeIn();
    } else {
      $(".cookie").fadeOut();
    }
  });
  // top menu
  $(function () {
    // 보이기 | 숨기기
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $(".flot_menu").fadeIn();
      } else {
        $(".flot_menu").fadeOut();
      }
    });
  });

  // 버튼 클릭시
  $(".fa-angles-up").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0, // 0 까지 animation 이동합니다.
      },
      400
    ); // 속도 400
    return false;
  });
});
