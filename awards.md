---
layout: page
title: Awards and Fellowships
permalink: /awards/
---
<ul class="entry-list">
{% for item in site.data.awards %}
  <li class="entry">
    <span class="entry-dates">{{ item.dates }}</span>
    <div class="entry-title">{{ item.title }}</div>
    <div class="entry-place">{{ item.place }}</div>
    <div class="entry-details">{{ item.details }}</div>
  </li>
{% endfor %}
</ul>
