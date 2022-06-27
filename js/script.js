// 멀티미디어 요소 로딩 전 실행
$(document).ready();

// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function () {
  //상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop: true,
    // 자동넘기기
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    //fade 효과 (swiper demo 확인)
    effect: "fade",
    // pagenation (swiper demo 확인 클릭가능)
    pagination: {
      el: '.sw-banner-pgnt',
      clickable: true,
    },
    //touchMove 불가능하게만들기
    allowTouchMove: false,
  });

  new Swiper('.sw-visual', {
    loop: true,
    // 자동넘기기
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    //fade 효과 (swiper demo 확인)
    // effect: "fade",
    // pagenation (swiper demo 확인 클릭가능)
    pagination: {
      el: '.sw-visual-pgnt',
      clickable: true,
    },
  });
}