---
layout: page
title: Hello World!
tagline: 
---
{% include JB/setup %}
<div markdown="1" class="row">
<div markdown="1" class="col-lg-6">
Hi there!I'm Solar.I'm a web front-end developer from Xi'an ,China.I love css,html & javascript.You can find me @<a href="https://twitter.com/solarcellsky">solarcellsky</a> & <a href="http://www.facebook.com/solarcellsky">Facebook</a>.email: sola<a href="http://www.google.com/recaptcha/mailhide/d?k=01dMB7YR-HLtqKltXRX8fA5A==&amp;c=urfzZrF2qCGFj75NTyesmTdBYJ-xNCwEPTh_R4DYh_Y=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\07501dMB7YR-HLtqKltXRX8fA5A\75\75\46c\75urfzZrF2qCGFj75NTyesmTdBYJ-xNCwEPTh_R4DYh_Y\075', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" title="Reveal this e-mail address">...</a>@gmail.com
<h3>Recent Posts</h3>
<ul markdown="1" class="posts">
{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
</div>
<div markdown="1" class="col-lg-6">
<h3>Categories</h3>
<ul markdown="1" class="tag_box inline">
{% assign categories_list = site.categories %}
{% include JB/categories_list %}
</ul>
<h3>Tags</h3>
<ul markdown="1" class="tag_box inline">
{% assign tags_list = site.tags %}  
{% include JB/tags_list %}
</ul>
<h3>Links</h3>
<ul markdown="1" class="tag_box inline">
<li><a href="tools/">Tools</a></li>
<li><a href="ua.html">UA</a></li>
<li><a href="http://browserbench.org/">Browser Benchmark</a></li>
</ul>
</div>
</div>