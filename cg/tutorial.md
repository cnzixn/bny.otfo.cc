---
layout: page
title: 教程
category: tutorial
permalink: /cg/tutorial/
---

<div class="posts">
  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>