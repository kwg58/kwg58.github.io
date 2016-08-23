$(document).ready(function(){

  $("#bio")
  .on("mouseover", function(e){
    $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ")
  });

  $("#motivation")
  .on("click", function(e){
    $("#contentBlog").first().html("Read exciting, thought-provoking quips  on beautiful backgrounds around the world!<br><br> Using AJAX calls on subreddits <br><br><br><a class='go' href='https://at89.github.io/automotivationals'>App</a> | <a class='go2' href='http://github.com/at89/automotivationals'>Github</a>")
  });

  $("#experience")
  .on("click", function(e){
    $(".showing").toggleClass("stack");
    $(".showing").toggleClass("showing");
    $("#experienceDiv").toggleClass("showing");
    $("#experienceDiv").toggleClass("stack");
  });

  $("#skills")
  .on("click", function(e){
    $(".showing").toggleClass("stack");
    $(".showing").toggleClass("showing");
    $("#skillsDiv").toggleClass("showing");
    $("#skillsDiv").toggleClass("stack");
  });


});


function formatPubDate(dateIn) {
  // 08/23/2016 05:46:00
  var months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  var dateIn = "08/23/2016 05:46:00"
  var dateMid = dateIn.split(" ")[0].split("/");
  monthNum = parseInt(dateMid[0]) - 1
  console.log(months[monthNum]);
  console.log(dateMid[1]);
  console.log(dateMid[2]);
  return (dateMid[1] + " " + months[monthNum] + " " + dateMid[2])
}
