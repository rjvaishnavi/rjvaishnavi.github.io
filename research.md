---
layout: page
title: Research Experience
permalink: /research/
---
<ul class="entry-list">
{% for item in site.data.research_experience %}
  <li class="entry">
    <span class="entry-dates">{{ item.dates }}</span>
    <div class="entry-title">{{ item.role }}</div>
    <div class="entry-place">{{ item.place }}</div>
    <div class="entry-details">{{ item.details }}</div>
  </li>
{% endfor %}
</ul>
