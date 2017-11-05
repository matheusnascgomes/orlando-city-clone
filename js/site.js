$(function(){
  $("#input-search").on("focus",function(){
      $("li.search").addClass("actived");
  }).on("blur",function(){
    $("li.search").removeClass("actived");
  });

  $(".thumbnails").owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      // nav: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});
