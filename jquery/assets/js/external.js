
//prevent document style overflow
$(document).ready(function() {
    // aside overflow scroll functionality using jquery
    $('.scrollbar').css("overflow-y", "scroll");
    // header sticky functionality using jquery
    $('.header').css({
        "position": "sticky",
        "top": "0"
    });
     if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
     

     $('#zoom_01').elevateZoom({
        
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing : true,
             lensSize    : 200
            
     }); 
     
      
 $('#zoom_02').elevateZoom({
        zoomWindowWidth: 500,
        zoomWindowHeight: 500,
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing : true,
            scrollZoom : true
     }); 
     
   
   
   
    
});