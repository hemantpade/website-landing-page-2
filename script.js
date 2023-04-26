$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
 

});

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
       
        $panel1 = $('.panel1');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel1.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height()*1.2 > scroll) {
            
        // Remove all classes on body with color-
        $panel1.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $panel1.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();
