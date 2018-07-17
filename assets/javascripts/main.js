$(document).ready(function($){
        var parPosition = [];
      $('.par').each(function() {
          parPosition.push($(this).offset().top);
      });

//Soft Scroll on link click
  $('.vNav a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

  $('.bottomScroll').click(function(){
    $('html, body').animate({
      scrollTop: $("#section4").offset().top
    }, 1000);
    return false;
  });

        $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
      $(this).addClass('active');
  });

     $('.vNav a').hover(function() {
         $(this).find('.label').show();
         }, function() {
         $(this).find('.label').hide();
     });

         $(document).scroll(function(){
      var position = $(document).scrollTop(),
              index;
              for (var i=0; i<parPosition.length; i++) {
              if (position <= parPosition[i]) {
                  index = i;
                  break;
              }
          }
    $('.vNav ul li a').removeClass('active');
          $('.vNav ul li a:eq('+index+')').addClass('active');
      });

        $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
      $(this).addClass('active');
  });
});

// scrollDown Settings
  //Soft scroll
$('#scrollDown').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

/*
// Blog Photo Behavior
$("#blogBlock").hover(function(){
    $('#blogPhoto').fadeOut();
});
*/

// .wordmarkMini Appear
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#wordmarkMini:hidden').stop(true, true).slideDown('200ms');
        $('#wordmarkMiniBox:hidden').stop(true, true).fadeIn('200ms');
    } else {
        $('#wordmarkMini').stop(true, true).slideUp('200ms');
        $('#wordmarkMiniBox').stop(true, true).fadeOut('100ms');
    }
});

// .wordmarkMini scroll to top
$(document).ready(function(){
	$('#wordmarkMiniBox').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});


// Tag Displaying and Filtering
function showhide(id){
        if (document.getElementByClassName) {
          var divid = document.getElementByClassName(class);
          var divs = document.getElementsByClassName("hide");
          for(var i=0;i<divs.length;i++) {
            divs[i].style.display = "none";
          }
          divid.style.display = "block";
        }
        return false;
 }
