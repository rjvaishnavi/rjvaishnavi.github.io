---
layout: page
title: News
permalink: /news/
---
<ul class="news-list">
{% for item in site.data.news %}
  <li><span class="news-date">{{ item.date }}</span>{{ item.text }}</li>
{% endfor %}
</ul>
