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


## GitHub Resources

<div style='margin-top:10px;margin-bottom:10px'>
<br>
</div>

<div id="github-repositories">
  <p>Loading repositories...</p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {

  fetch("https://api.github.com/orgs/multimorbidity-research-leeds/repos?type=sources&per_page=100")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("GitHub API request failed");
      }
      return response.json();
    })
    .then(function(repositories) {

      var container = document.getElementById("github-repositories");

      container.innerHTML = "";

      repositories.forEach(function(repo) {

        var div = document.createElement("div");
        div.style.marginBottom = "30px";

        var link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.textContent = "• " + repo.name;

        div.appendChild(link);

        if (repo.description) {

          var description = document.createElement("p");
          description.style.marginTop = "5px";
          description.style.marginLeft = "15px";
          description.textContent = repo.description;

          div.appendChild(description);
        }

        container.appendChild(div);
      });

      if (repositories.length === 0) {
        container.innerHTML = "<p>No repositories found.</p>";
      }

    })
    .catch(function(error) {

      console.log(error);

      document.getElementById("github-repositories").innerHTML =
        "<p>Unable to load GitHub repositories.</p>";

    });

});
</script>