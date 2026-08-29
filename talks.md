---
layout: page
title: Talks and Tutorials
permalink: /talks/
---
<ul class="entry-list">
{% for item in site.data.talks %}
  <li class="entry">
    <span class="entry-dates">{{ item.dates }}</span>
    <div class="entry-title">{{ item.title }}</div>
    <div class="entry-place">{{ item.event }}</div>
    <div class="entry-details">
      {{ item.details }}
      {% if item.link and item.link != "" %} — <a href="{{ item.link }}" target="_blank">slides / recording</a>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
