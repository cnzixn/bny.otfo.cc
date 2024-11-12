---
layout: page
title: 全部
permalink: /cg/post/
---

<div class="posts">
  <!-- 搜索框 -->
  <div class="search-container">
      <input type="text" id="search-bar" placeholder="搜索文章..." />
  </div>
  <!-- 文章列表 -->
  <ul>
    {% for post in site.posts %}
    <li data-url="{{ post.url | prepend: site.baseurl }}">
      {% include card.html post = post %}
    </li>
    {% endfor %}
  </ul>
</div>
