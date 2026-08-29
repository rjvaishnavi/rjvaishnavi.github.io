---
layout: page
title: Education
permalink: /education/
---
<ul class="entry-list">
{% for item in site.data.education %}
  <li class="entry">
    <span class="entry-dates">{{ item.dates }}</span>
    <div class="entry-title">{{ item.degree }}</div>
    <div class="entry-place">{{ item.institution }}</div>
    <div class="entry-details">{{ item.details }}</div>
  </li>
{% endfor %}
</ul>
