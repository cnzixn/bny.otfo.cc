---
layout: page
title: 文件
category: file
---

<div class="posts">
  <!-- 搜索框 -->
  <div class="search-container">
      <input type="text" id="search-bar" placeholder="搜索文章..." />
  </div>
  <!-- 文章列表 -->
  <ul id="post-list">
    {% for post in site.categories[page.category] %}
      <li data-url="{{ post.url | prepend: site.baseurl }}">
        {% include card.html post=post %}
      </li>
    {% endfor %}
  </ul>
</div>