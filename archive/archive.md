---
layout: default
title: Arichive
permalink: /arichive/
---
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
{% include duoshuo.html %}
