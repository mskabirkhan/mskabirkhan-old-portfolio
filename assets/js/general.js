$(document).ready(function(){
   

   $('.play-video a').click(function(){
     
     $('.view-image').fadeIn();
     return false;
   });

   $('.view-image i').click(function(){

    $('.view-image').fadeOut();
     return false;
});



   $('a#mobile-menu').click(function(){
     $('.mobile-menu-drop').slideToggle('fast');
   });


   $('a.all-a').click(function(){
      $('a.all-a').addClass('active');
      $('a.bus-listing-a').removeClass('active');
      $('a.prop-listing-a').removeClass('active');
      return false;
   });


    $('a.bus-listing-a').click(function(){
      $('a.all-a').removeClass('active');
      $('a.bus-listing-a').addClass('active');
      $('a.prop-listing-a').removeClass('active');
      return false;
   });
       $('a.prop-listing-a').click(function(){
      $('a.all-a').removeClass('active');
      $('a.bus-listing-a').removeClass('active');
      $('a.prop-listing-a').addClass('active');
      return false;
   });
   });