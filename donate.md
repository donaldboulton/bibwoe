---
title: "Donate"
excerpt: "Donate to feed stray cats or me."
no_menu_item: true
sitemap: false
author_profile: true
adds: true
reviews: false
sidenav: true
layout: products
name: "Donate"
products: true
image: /assets/images/cart/sponser-us.png
header:
  image: /assets/images/cart/sponser-us.png
  teaser: /assets/images/cart/sponser-us-320.png
support: [products, adds]  
---

# About this donation page

Although the primary function of this donation page is to get help feeding stray cats, some tips for my web design and code, would be cool. Thank you, you are the best!

{% for product in site.products %}
  {% include product.html %}
{% endfor %}
