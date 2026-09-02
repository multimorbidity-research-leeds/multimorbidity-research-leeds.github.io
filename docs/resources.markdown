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

<div>

  {% for repository in site.github.public_repositories %}

    <div style="margin-bottom:30px">

      <a href="{{ repository.html_url }}" target="_blank">
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