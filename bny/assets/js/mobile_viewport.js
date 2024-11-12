// <script>
  // 强制网页显示为手机版
  if (window.innerWidth >= 768) {
    var viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.parentNode.removeChild(viewportMeta);
    }
    var newViewport = document.createElement('meta');
    newViewport.name = "viewport";
    newViewport.content = "width=375, initial-scale=1";  // 模拟 iPhone 手机的宽度
    document.getElementsByTagName('head')[0].appendChild(newViewport);
  }
// </script>