$(document).ready(function() {   
    $('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
  
        var maskHeight = $(document).height();
    var maskWidth = $(window).width();
  
    $('#mask').css({'width':maskWidth,'height':maskHeight});
  
    $('#mask').fadeIn(1500); 
    $('#mask').fadeTo("slow",0.8); 
  
    var winH = $(window).height();
    var winW = $(window).width();
  
   $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
  
    $(id).fadeIn(2000); 
  
   });
  
    $('.window .close').click(function (e) {
    $('#mask, .window').fadeOut(1500,function() {
        //Animation Complete
    });

    }); 
 
    $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
    }); 
  
    }); 