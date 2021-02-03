<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a style="color: blue; display: inline-block; width:200px; margin:10px;" href="{{ item.url }}">{{ item.title }}</a>
          <span style="display:inline-block; color:orange; margin:0 10px">{{ helper.relativeTime(item.time) }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>