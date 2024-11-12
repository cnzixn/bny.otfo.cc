function copyShortLink() {
  var shortLink = document.getElementById("shortLink");
  shortLink.select();  // 选择文本
  document.execCommand("copy");  // 执行复制操作
  alert("短链接已复制: " + shortLink.value);  // 弹出提示框，显示已复制的短链接
}