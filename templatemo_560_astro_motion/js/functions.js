$(function() {
    $(".expand").on( "click", function() {
      $(this).next().slideToggle(100);
      $expand = $(this).find(">:first-child");
      
      if($expand.text() == "+") {
        $expand.text("-");
      } else {
        $expand.text("+");
      }
    });
  });
