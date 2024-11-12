---
layout: page
title: 全部
permalink: /cg/post/
---

<div class="posts">
  <ul>
    {% for post in site.posts %}
    <li>{% include card.html post = post %}</li>
    {% endfor %}
  </ul>
</div>
