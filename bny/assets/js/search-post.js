// <script>
  // 获取搜索框和文章列表
  const searchBar = document.getElementById('search-bar');
  const postList = document.querySelector('.posts > ul');
  const postItems = postList.querySelectorAll('li');  // 获取所有 <li> 元素
  // const baseUrl = new URL(window.location.href).origin; // 获取当前页面的基础URL
  // const url = new URL('/assets/search.json', baseUrl); // 构建完整的URL
  

  // 加载 search.json 数据
  const baseurl = window.baseurl || '';
  // alert(`${baseurl}/assets/search.json`);
  fetch(`${baseurl}/assets/search.json`)
    .then(response => response.json())
    .then(data => {
      // 监听搜索框输入
      searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();

        // 输出查询词和加载的文章数据，帮助调试
        console.log('Search query:', query);
        console.log('Loaded data:', data);

        // 循环所有文章项
        Array.from(postItems).forEach(function(postItem) {
          const postUrl = postItem.getAttribute('data-url');
          const postData = data.posts.find(post => post.url === postUrl);

          // 检查是否找到匹配的文章数据
          if (postData) {
            const title = postData.title.toLowerCase();
            const content = postData.content.toLowerCase();

            // 输出匹配的标题和内容，帮助调试
            console.log('Matching post:', postData.title);

            // 如果标题或内容匹配搜索词，则显示该文章
            if (title.includes(query) || content.includes(query)) {
              postItem.style.display = 'block';  // 显示匹配的文章
            } else {
              postItem.style.display = 'none';  // 隐藏不匹配的文章
            }
          }
        });
      });
    })
    .catch(error => console.error('Error loading search.json:', error));
// </script>