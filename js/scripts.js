$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  $( "li" ).add( "p" ).css( "background-color", "red" );
  $( "li" ).add( document.getElementsByTagName( "p" )[ 0 ] )
  .css( "background-color", "red" );

  