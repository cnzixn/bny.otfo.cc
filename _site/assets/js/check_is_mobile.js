// <script>
    // 检测是否为手机设备
    function isMobile() {
      return /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    }

    // 如果不是手机设备，跳转到 404 页面
    if (!isMobile()) {
      window.location.href = "/404";  // 跳转到网站的 404 页面
    }
// </script>
