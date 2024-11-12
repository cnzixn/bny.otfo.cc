---
layout: page
title: 其他
category: other
permalink: /cg/other/
---

<div class="posts">
  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>