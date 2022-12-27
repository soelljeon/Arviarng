const cousor = document.querySelector(".cousor");
// // 원형 25px의 절반 -> cuusor 중앙으로 배치 ->cusor가 안먹힘..?
const animateCursor = (e) => {
  cousor.style.left = `${e.pageX}px`;
  cousor.style.top = `${e.pageY}px`;
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
// sec5
var swiper1 = new Swiper(".sec5_slide", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  slidesPerView: 4,
  spaceBetween: 0,
});
// top_menu
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
// cookie
$(function () {
  // 보이기 | 숨기기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".cookie").fadeIn();
    } else {
      $(".cookie").fadeOut();
    }
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
