prompt("SOS! Type your name and Click Ok!");

!$(function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/edebb03d7696eb4e1486b8c63/d24a437808a297e91995b8079.js");
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
$(document).ready(function() {
  $(".toggle").click(function() {
    $("#shown-design").toggle();
    $("#hidden-design").toggle();
  });
});
$(document).ready(function() {
  $(".toggle1").click(function() {
    $("#shown-development").toggle();
    $("#hidden-development").toggle();
  });
});
$(document).ready(function() {
  $(".toggle2").click(function() {
    $("#shown-product").toggle();
    $("#hidden-product").toggle();
  });
});
 
$(document).ready(function() {
  $(".cruiser").mouseover(function() {
    $("#g1").show()
  })
  $(".cruiser").mouseleave(function(){
    $("#g1").hide()
  })
  $(".cruiser1").mouseover(function() {
    $("#g2").show()
  })
  $(".cruiser1").mouseleave(function(){
    $("#g2").hide()
  })
  $(".cruiser2").mouseover(function() {
    $("#g3").show()
  })
  $(".cruiser2").mouseleave(function(){
    $("#g3").hide()
  })
  $(".cruiser3").mouseover(function() {
    $("#g4").show()
  })
  $(".cruiser3").mouseleave(function(){
    $("#g4").hide()
  })
  $(".cruiser4").mouseover(function() {
    $("#g5").show()
  })
  $(".cruiser4").mouseleave(function(){
    $("#g5").hide()
  })
  $(".cruiser5").mouseover(function() {
    $("#g6").show()
  })
  $(".cruiser5").mouseleave(function(){
    $("#g6").hide()
  })
  $(".cruiser6").mouseover(function() {
    $("#g7").show()
  })
  $(".cruiser6").mouseleave(function(){
    $("#g7").hide()
  })
  $(".cruiser7").mouseover(function() {
    $("#g8").show()
  })
  $(".cruiser7").mouseleave(function(){
    $("#g8").hide()
  })
})
$(document).ready(function(){
  $(".section6").submit(function(){
    alert("WE have received your message ,thank you for reaching out to Delani studio");
  });
});

