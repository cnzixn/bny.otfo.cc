---
layout: page
title: 日志
category: log
permalink: /cg/log/
---

<div class="posts">
  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>