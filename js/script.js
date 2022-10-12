// 멀티미디어 요소 로딩 전 실행
$(document).ready(function () {
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");

  modalClose.click(function () {
    $(".modal-wrap").hide();
  });

  modalWrap.click(function () {
    $(".modal-wrap").hide();
  });

  // 모바일 메뉴
  let mb_div = $(".mb-div");

  // 모바일 보기버튼 기능
  let mb_btn = $(".mb-btn");

  mb_btn.click(function () {
    mb_div.show();
  });

  // 모바일닫기기능
  let mb_close = $(".mb-close");

  mb_close.click(function () {
    mb_div.hide();
  });

  // 배경 누르면 닫기

  mb_div.click(function () {
    mb_div.hide();
  });

  // 내용을 클릭하면 배경으로 신호전달막기
  $(".mb-bg").click(function (event) {
    //  신호 전달 막기
    event.stopPropagation();
  });

  //모바일 메뉴 기능
  let mb_menu_li = $(".mb-menu > li");
  $.each(mb_menu_li, function (index, item) {
    // mb-mainmenu 를 찾아서 보관
    let temp = $(this).find(".mb-mainmenu");
    temp.click(function () {
      // 펼쳐져있는경우 true,없으면 false
      let result = temp.hasClass("mb-mainmenu-open");

      if (result == true) {
        //펼쳐진 클래스가진 경우
        temp.removeClass("mb-mainmenu-open");
        // 펼쳐진 서브 메뉴 닫기
        mb_menu_li.find(".mb-submenu").hide();
      } else {
        // 모든클래스 일단제거
        mb_menu_li.find(".mb-mainmenu").removeClass("mb-mainmenu-open");
        // 모든 펼쳐진 서브메뉴를 닫는다.
        mb_menu_li.find(".mb-submenu").hide();

        //펼쳐진 클래스 없는 경우
        temp.addClass("mb-mainmenu-open");
        // 서비메뉴 쳘치기
        mb_menu_li.eq(index).find(".mb-submenu").show();
      }
    });
  });

  //윈도우 너비 체크
  $(window).resize(function () {
    let temp = $(window).width();
    if (temp >= 880) {
      mb_div.hide();
      $(".mb-mainmenu").removeClass("mb-mainmenu-open");
      $(".mb-submenu").hide();
    }
  });
});

// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function () {
  // 스크롤시 헤더고정
  let header = $(".header");
  let wrap = $(".wrap");
  // 사라지는 시점 px 값
  // banner 의 높이값 px
  let finY = $(".banner").height();

  $(window).scroll(function () {
    // 스크롤바의 세로상단 px값
    let temp = $(window).scrollTop();
    // 50은 banner의 높이값 px
    if (temp > finY) {
      header.addClass("header-fix");
      wrap.addClass("wrap-fix");
    } else {
      header.removeClass("header-fix");
      wrap.removeClass("wrap-fix");
    }
  });

  // 상단배너닫기기능
  let banner_close = $(".banner-close");
  banner_close.click(function () {
    // 배너가 보여지지않으므로 값을 제거
    finY = 0;
    $(".banner").slideUp(300);
  });

  //상단 배너 슬라이드
  new Swiper(".sw-banner", {
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
      el: ".sw-banner-pgnt",
      clickable: true,
    },
    //touchMove 불가능하게만들기
    allowTouchMove: false,
  });

  new Swiper(".sw-visual", {
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
      el: ".sw-visual-pgnt",
      clickable: true,
    },
  });
};
