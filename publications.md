---
layout: page
title: Publications
permalink: /publications/
---
{% assign pubs_by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% for year_group in pubs_by_year %}
<h2 class="pub-year">{{ year_group.name }}</h2>
<ul class="pub-list">
  {% for pub in year_group.items %}
  <li class="pub-entry">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-venue">{{ pub.year }}, <em>{{ pub.venue }}</em></div>
    <div class="pub-links">
      {% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}" target="_blank">PDF</a>{% endif %}
      {% if pub.code %}<a href="{{ pub.code }}" target="_blank">Code</a>{% endif %}
      {% if pub.project and pub.project != "" %}<a href="{{ pub.project }}" target="_blank">Project</a>{% endif %}
      {% if pub.arxiv %}<a href="{{ pub.arxiv }}" target="_blank">arXiv</a>{% endif %}
      {% if pub.abstract %}
      <details class="pub-toggle"><summary>Abstract</summary><p>{{ pub.abstract }}</p></details>
      {% endif %}
      {% if pub.bibtex %}
      <details class="pub-toggle">
        <summary>BibTeX</summary>
        <button class="copy-bibtex" type="button">Copy</button>
        <pre class="bibtex-block">{{ pub.bibtex }}</pre>
      </details>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
{% endfor %}
