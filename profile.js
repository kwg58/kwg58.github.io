$("#bio")
.on("mouseover", function(e){
  $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ")
});

$("#motivation")
.on("click", function(e){
  $("#contentBlog").first().html("Read exciting, thought-provoking quips  on beautiful backgrounds around the world!<br><br> Using AJAX calls on subreddits <br><br><br><a class='go' href='https://at89.github.io/automotivationals'>App</a> | <a class='go2' href='http://github.com/at89/automotivationals'>Github</a>")
});
