---
layout: default
title: Resources
permalink: /research-resources/
---

<div style='margin-top:50px;margin-bottom:50px'>
<br>
</div>

## Publication Resources

<div style='margin-top:10px;margin-bottom:10px'>
<br>
</div>

<div>
  {% for resource in site.research-resources reversed %}
    <a href="{{ resource.url }}">
      &bull; {{ resource.title }}
    </a>
    <div style="margin-top:30px"></div>
  {% endfor %}
</div>


## GitHub Resources

<div style='margin-top:10px;margin-bottom:10px'>
<br>
</div>

<div>

  {% for repository in site.data.github_repositories %}

    <div style="margin-bottom:30px">

      <a href="{{ repository.url }}" target="_blank">
        &bull; <strong>{{ repository.name }}</strong>
      </a>

      {% if repository.description %}
        <p style="margin-top:5px;margin-left:15px">
          {{ repository.description }}
        </p>
      {% endif %}

    </div>

  {% endfor %}

</div>