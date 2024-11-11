---
layout: page
title: Logs
category: logs
permalink: /category/logs/
---


<div class="posts">

  <ul>
    {% for post in site.categories[page.category] %}
      <li>{% include card.html post=post %}</li>
    {% endfor %}
  </ul>
</div>