---
layout: default
title: Arichive
permalink: /arichive/
---

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ '/index.html' | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}

  <ul class="post-list">
    <!-- where the tag is git pages-->
     {% for cat in site.categories %}
	  <!--
		<li class="listing-seperator" id="{{ cat[0] }}">{{ cat[0] }} ({{ cat[1].size }})</li>
	  -->
        <span class="label label-zan">
	<tags class='fa fa-tags'>{{ cat[0] }} ({{ cat[1].size }})</tags>
	</span>
	{% for post in site.posts %}
		{% if  post.tags[0] ==  cat[0] %}
        		 <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"> 
				 <span class="fa fa-calendar post-meta">{{ post.date | date: "%Y-%m-%d" }}&raquo;</span> {{ post.title }}
			 </a>		
		{% endif %}
        {% endfor %}
    {% endfor %}
 </ul>
