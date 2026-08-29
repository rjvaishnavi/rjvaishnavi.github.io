---
layout: page
title: Languages
permalink: /languages/
---
<ul class="entry-list">
{% for item in site.data.languages %}
  <li class="entry">
    <div class="entry-title">{{ item.language }}</div>
    <div class="entry-place">{{ item.level }}</div>
  </li>
{% endfor %}
</ul>
