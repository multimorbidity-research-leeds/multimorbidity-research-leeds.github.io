---
layout: default
title: Resources
permalink: /research-resources/
---

<div style='margin-top:50px;margin-bottom:50px'>
<br>
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
<div style="margin-bottom:30px">
    <a href="https://multimorbidity-research-university-of-leeds.shinyapps.io/postMI_CIF/" target="_blank">
      &bull; <strong>Health outcomes after myocardial infarction: a population study of 56 million people in England</strong>
    </a>
    <p style="margin-top:5px;margin-left:15px">
      The interactive heat maps based on this work can be explored here
    </p>
  </div>

  <div style="margin-bottom:30px">
    <a href="https://multimorbidity-research-university-of-leeds.shinyapps.io/postMI_CIF_spatial/" target="_blank">
      &bull; <strong>Cumulative Incidence by Sub Integrated Care Board</strong>
    </a>
    <p style="margin-top:5px;margin-left:15px">
      The interactive maps based on this work can be explored here.
    </p>
  </div>
</div>
