---
layout: page
title: Teaching and Mentoring Experience
permalink: /teaching/
---
<ul class="entry-list">
{% for item in site.data.teaching %}
  <li class="entry">
    <span class="entry-dates">{{ item.dates }}</span>
    <div class="entry-title">{{ item.role }}</div>
    <div class="entry-place">{{ item.place }}</div>
    <div class="entry-details">{{ item.details }}</div>
  </li>
{% endfor %}
</ul>
