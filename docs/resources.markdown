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
<!--<ul style="list-style-type:none">-->
<div>
  {% for resource in site.research-resources reversed %}
    <!--<li>-->
	<a href="{{ resource.url }}">
&bull; {{ resource.title }}
		<!--&bull; <time datetime="{{ resource.date | date: "%Y-%m-%d" }}">{{ resource.date | date_to_long_string }}</time>-->
        </a>
	<div style="margin-top:30px"></div>
    <!--</li>-->
  {% endfor %}
</div>
<!--</ul>-->

<h2>GitHub Resources</h2>

<div id="github-repositories">
  <p>Loading repositories...</p>
</div>

<script>
fetch("https://api.github.com/orgs/multimorbidity-research-leeds/repos?per_page=100&sort=updated")
  .then(response => response.json())
  .then(repositories => {
    const container = document.getElementById("github-repositories");

    container.innerHTML = repositories.map(repo => `
      <div style="margin-bottom:30px;">
        <a href="${repo.html_url}" target="_blank">
          &bull; <strong>${repo.name}</strong>
        </a>
        ${repo.description ? `<p style="margin-top:5px;margin-left:15px;">${repo.description}</p>` : ""}
      </div>
    `).join("");
  })
  .catch(error => {
    document.getElementById("github-repositories").innerHTML =
      "<p>Unable to load GitHub repositories.</p>";
  });
</script>