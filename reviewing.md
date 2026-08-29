---
layout: page
title: Reviewing and Committee Work
permalink: /reviewing/
---
<ul class="entry-list">
{% for item in site.data.reviewing %}
  <li class="entry">
    <div class="entry-title">{{ item.role }}</div>
    <div class="entry-place">{{ item.venue }}</div>
    <div class="entry-place" style="font-weight: bold;">{{ item.details }}</div>
  </li>
{% endfor %}
</ul>
