---
layout: default
title: Resources
permalink: /research-resources/
---

<div style='margin-top:50px;margin-bottom:50px'>
<br>
</div>

## Publication resources

<div style='margin-top:10px;margin-bottom:10px'>
<br>
</div>
<!--<ul style="list-style-type:none">-->
<div>
  {% for resource in site.research-resources %}
    <!--<li>-->
	<a href="{{ resource.url }}">
        {{ resource.type }} &ndash;  {{ resource.title }}
		
		<!--&ndash; <time datetime="{{ resource.date | date: "%Y-%m-%d" }}">{{ resource.date | date_to_long_string }}</time>-->
    </a>
    <!--</li>-->
  {% endfor %}
</div>
<!--</ul>-->

