// 버튼을 누르면 다음 순서로 이동하기
// 선택된 이미지에는 클래스 추가로 크기 늘리기
// 선택된 버튼에 클래스 추가로 모양 바꾸기

$(document).ready(function () {
  $(".button_c")
    .each(function (index) {
      $(this).attr({
        "data-index": index,
      });
    })
    .click(function () {
      var clicked = $(this).attr("data-index");

      $(".move_wrap_2")
        .stop()
        .animate({
          left: -250 * clicked,
          loop: true,
        });

      $(".button_c").removeClass("button_r");
      $(".button_c").eq(clicked).addClass("button_r");

      $(".con_2").removeClass("con_2_s2");
      $(".con_2").eq(clicked).addClass("con_2_s2");
    });
});

$(document).ready(function () {
  $(".button_c2")
    .each(function (index) {
      $(this).attr({
        "data-index": index,
      });
    })
    .click(function () {
      var clicked = $(this).attr("data-index");

      $(".move_wrap_22")
        .stop()
        .animate({
          left: -325 * clicked,
          loop: true,
        });

      $(".button_c2").removeClass("button_r2");
      $(".button_c2").eq(clicked).addClass("button_r2");

      $(".con_22").removeClass("con_2_s22");
      $(".con_22").eq(clicked).addClass("con_2_s22");
    });
});

$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  });
});
