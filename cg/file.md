---
layout: page
title: 文件
category: file
permalink: /cg/file/
---

<div class="posts">
  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>