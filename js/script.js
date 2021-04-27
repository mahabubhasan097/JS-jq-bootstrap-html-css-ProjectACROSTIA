// Instantiate EasyZoom instances
var $easyzoom = $('.easyzoom').easyZoom();

// Setup thumbnails example
var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');



// Setup toggles example
var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');
$(document).ready(function(){


    //   isotope
      $('.portfolio-item').isotope({
          itemSelector:'.item', 
      });
      $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });
    $('.thumbnails').on('click', 'a', function(e) {
        var $this = $(this);
    
        e.preventDefault();
    
        // Use EasyZoom's `swap` method
        api1.swap($this.data('standard'), $this.attr('href'));
    });
     $('.toggle').on('click', function() {
         var $this = $(this);
    
        if ($this.data("active") === true) {
             $this.text("Switch on").data("active", false);
            api2.teardown();
         } else {
        $this.text("Switch off").data("active", true);
             api2._init();
         }
    });
    
});
// wow js
new WOW().init();


