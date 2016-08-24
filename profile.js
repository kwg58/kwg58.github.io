$(document).ready(function(){

  // $("#skills").on({
  //   click: divFlip("skills", "c")
  // });
  // $("#experience").on({
  //   mouseenter: function() {
  //     console.log("experience enter");
  //     divFlip("experience", "m")
  //   },
  //   mouseleave: function() {
  //     console.log("experience leave");
  //     divFlip("experience", "l")
  //   },
  //   click: function() {
  //     console.log("experience click");
  //     divFlip("experience", "c")
  //   }
  // });

  // $("#bio")
  // .on("click", function(e){
  //   $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ")
  // });
  //
  // $("#motivation")
  // .on("click", function(e){
  //   $("#contentBlog").first().html("Read exciting, thought-provoking quips  on beautiful backgrounds around the world!<br><br> Using AJAX calls on subreddits <br><br><br><a class='go' href='https://at89.github.io/automotivationals'>App</a> | <a class='go2' href='http://github.com/at89/automotivationals'>Github</a>")
  // });
  //
  // $("#experience")
  // .on("click", function(e){
  //   $(".showing").toggleClass("stack");
  //   $(".showing").toggleClass("showing");
  //   $("#experiencexDiv").toggleClass("showing");
  //   $("#experiencexDiv").toggleClass("stack");
  // });

  //   $("#skills")
  //   .on("click", function(e){
  //     $(".showing").toggleClass("stack");
  //     $(".showing").toggleClass("showing");
  //     $("#skillsxDiv").toggleClass("showing");
  //     $("#skillsxDiv").toggleClass("stack");
  //   });
  //
  //   $("#mash")
  //   .on("mouseover", function(e){
  //     $(".showing").toggleClass("stack");
  //     $(".showing").toggleClass("showing");
  //     $("#mashxDiv").toggleClass("showing");
  //     $("#mashxDiv").toggleClass("stack");
  //   }
  //   .on("mouseaway"), function(e) {
  //
  //   }
  // );

  // $("#munchkins")
  // .on("mouseover", function(e){
  //   $(".showing").toggleClass("stack");
  //   $(".showing").toggleClass("showing");
  //   $("#munchkinsxDiv").toggleClass("showing");
  //   $("#munchkinsDiv").toggleClass("stack");
  // }
  // .on("mouseaway", function(e){
  //
  // }));



});
// ignore mouseaway after click if it's the same object
function divFlip(divIn, type) {
  if (type == "l") {
    $(".showing").toggleClass("stack showing");
    $("#sayingDiv").toggleClass("stack showing");
  } else {
    var divX = "#" + divIn + type + "Div"
    $(".showing").toggleClass("stack showing");
    $(divX).toggleClass("stack showing");
  }
}


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
  return (dateMid[1] + " " + months[monthNum] + " " + dateMid[2])
}
