// <script>
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true, // 循环播放
      autoplay: {
        delay: 3000, // 每3秒切换一次
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // 点击分页器切换图片
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
// </script>

