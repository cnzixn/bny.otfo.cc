---
layout: page
title: Others
category: others
permalink: /category/others/
---

<div class="posts">

  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>