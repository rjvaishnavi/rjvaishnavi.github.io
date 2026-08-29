---
layout: default
title: About
---
<section class="profile">
  <img src="{{ site.author.photo | relative_url }}" alt="{{ site.author.name }}" class="profile-photo">
  <div class="profile-text">
    <h1>{{ site.author.name }}</h1>
    <p class="profile-title">{{ site.author.title }}</p>
    <p class="profile-affiliation">{{ site.author.affiliation }}</p>
    <div class="profile-social">
      {% if site.social.github %}<a href="{{ site.social.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
      {% if site.social.linkedin %}<a href="{{ site.social.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>{% endif %}
      {% if site.social.orcid %}<a href="{{ site.social.orcid }}" target="_blank" rel="noopener">ORCID</a>{% endif %}
      {% if site.social.google_scholar %}<a href="{{ site.social.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a>{% endif %}
    </div>
  </div>
</section>

## About Me

I am a PhD Student in the [Internet Architecture Group](https://www.mpi-inf.mpg.de/departments/inet){:target="_blank"} at the [Max Planck Institute for Informatics](https://www.mpi-inf.mpg.de/home){:target="_blank"}, being advised by [Prof. Anja Feldmann, PhD](https://www.mpi-inf.mpg.de/departments/inet/people/anja-feldmann){:target="_blank"} and [Univ.Prof. Dr.-Ing. Tobias Fiebig](https://informatics.tuwien.ac.at/people/tobias-fiebig){:target="_blank"}.

Broadly, my research operates on measuring the Internet in practice, focusing on operational behavior of the Internet infrastructure. 
<!-- As the Internet relies on a decentralized, layered architecture managed by independently operated systems, irregularities frequently arise in practice. -->
Understanding the heterogeneity of the Internet is essential for identifying subtle operational failures, diagnosing protocol inconsistencies, and ultimately building more robust Internet systems.
My work in this space spans measuring IPv6 deployment and ICMPv6 behavior, Path MTU discovery & Path MTU sizes, routing security, and passive analysis of application-layer traffic. 

Previously, I have worked on projects including the development of early-warning systems for natural disasters using geospatial data at the
[Federal Geographic Data Committee](https://www.fgdc.gov/), U.S. Department of the Interior, and explorations of robotics and forgery-detection techniques using deep learning at the [School of Computer and Information Sciences](https://scis.uohyd.ac.in/), University of Hyderabad.

**I am currently open for internship opportunities starting in 2027**
## News

<ul class="news-list">
{% for item in site.data.news limit:3 %}
  <li><span class="news-date">{{ item.date }}</span>{{ item.text }}</li>
{% endfor %}
</ul>

[See all news →]({{ '/news/' | relative_url }})
