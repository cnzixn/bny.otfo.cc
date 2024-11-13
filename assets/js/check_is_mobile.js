// <script>
  // 检测是否为手机设备
  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
  }

  // 检查设备是否处于横屏状态
  function checkOrientation() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    // alert(screenWidth + ", " + screenHeight);

    // 如果是手机设备或者宽屏设备
    if (isMobile() || screenWidth > 697) {
      // 判断横屏
      if (screenWidth > screenHeight || screenWidth > 697) {
        // 横屏时提示
        if (!document.getElementById('rotate-webpage-tip')) {
          var tip = document.createElement('div');
          tip.id = 'rotate-webpage-tip';
          tip.style.position = 'fixed';
          tip.style.top = '0';
          tip.style.left = '0';
          tip.style.width = '100%';
          tip.style.height = '100%';
          tip.style.backgroundColor = '#ffcc00';
          tip.style.color = '#000';
          tip.style.textAlign = 'center';
          tip.style.verticalAlign = 'middle';
          tip.style.display = 'flex';
          tip.style.justifyContent = 'center';
          tip.style.alignItems = 'center';
          tip.style.fontSize = '24px';  // 设置字体大小
          tip.style.fontWeight = 'bold'; // 设置字体粗体
          tip.style.padding = '10px';
          tip.style.zIndex = '9999';
          tip.innerHTML = '为了更好的体验</br></br>请使用手机浏览</br></br>请将屏幕旋转为竖屏';
          if (screenWidth > 697) {
            tip.style.fontSize = '36px';  // 设置字体大小
          }
          document.body.appendChild(tip);
        }
      } else {
        // 竖屏时移除提示
        var tip = document.getElementById('rotate-webpage-tip');
        if (tip) {
          tip.remove();
        }
      }
    }
  }


    // 监听窗口尺寸变化或设备方向变化
    window.addEventListener('resize', function() {
      checkOrientation(); // 传递 true 跳过重新加载
    }); // 窗口大小变化时触发
    
    // 页面加载时检查方向
    checkOrientation(); // 页面加载时跳过重新加载
// </script>