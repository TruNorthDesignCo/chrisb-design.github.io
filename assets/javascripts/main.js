/*
  // scrollDown Settings
    //Soft scroll
  $('#scrollDown').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
);
*/

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



//hover properties on nav dots
$(function() {
  $('.onepage-pagination, #navTooltips').hover(function() {
    $('.dotstyle li').addClass('navHover');
    $('#navTooltips').addClass('navHover');
    $('.navbar').addClass('navbarHover');
    $('.onepage-pagination').addClass('tooltipClick');
  });
});
// This one must exist separately to prevent nav elements from disappearing when moving mouse vertically across navbar
$(function() {
  $('.navbar').hover(function() {
    $('.dotstyle li').addClass('navHover');
    $('#navTooltips').addClass('navHover');
    $('.navbar').addClass('navbarHover');
    $('.onepage-pagination').addClass('tooltipClick');
  }, function() {
    $('.dotstyle li').addClass('navHover');
    $('#navTooltips').removeClass('navHover');
    $('.navbar').removeClass('navbarHover');
    $('.onepage-pagination').removeClass('tooltipClick');
  });
});
// To prevent navbar from getting stuck when touch users click directly on a nav bullet
$('body').click(function() {
  $('.dotstyle li').addClass('navHover');
  $('#navTooltips').removeClass('navHover');
  $('.navbar').removeClass('navbarHover');
  $('.onepage-pagination').removeClass('tooltipClick');
});



//about section flyout
$('#aboutButton').click(function() {
  $('.navbar').addClass('activeAbout');
  $('.onepage-pagination').addClass('activeAboutDots');
  $('#navTooltips').addClass('activeAboutTooltips');
});
$('.aboutClose').click(function() {
  $('.navbar').removeClass('activeAbout');
  $('.onepage-pagination').removeClass('activeAboutDots');
  $('#navTooltips').removeClass('activeAboutTooltips');
});

// Collapse about section on outside click
$('html').click(function() {
  $('.navbar').removeClass('activeAbout');
  $('.onepage-pagination').removeClass('activeAboutDots');
  $('#navTooltips').removeClass('activeAboutTooltips');
//  $('#navTooltips').removeClass('navHover');
});
//exceptions:
$('.navbar').click(function(event) {
  event.stopPropagation();
});


//form auto jump to next field
$('.inputs').keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
});


//character counter for subject text input
$('.subject').keyup(function(){
    if(this.value.length > $(this).attr('maxlength')){
        return false;
    }
    $(this).next().html("(" +($(this).attr('maxlength') - this.value.length) +"/102)");
});

$('.reset').click(function() {
  $('.textCounter').html("(102/102)");
});


// Contact Form Confirmation (desktop)
$("#contact").on("submit", function(e){
//	event.preventDefault();
  $('#contact_confirm').modal('toggle');
});

// Contact Form Confirmation (mobile)
$("#mobileContact").on("submit", function(e){
//	event.preventDefault();
  $('#contact_confirm').modal('toggle');
});

// Close All Other Modals Upon Opening
$('#contact_confirm').on('show.bs.modal', function () {
    $('.modal').not($(this)).each(function () {
        $(this).modal('hide');
    });
});


// Toolkit page filter
$('.toolFilterIcon').click(function() {
  $(this).siblings().addClass('inactive');
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).removeClass('inactive');
});

$('#toolAll').click(function() {
  $('#resourceBox table').removeClass('hide');
});
$('#toolDesign').click(function() {
  $('#resourceBox table:not(".tagDesign")').addClass('hide');
  $('#resourceBox table.tagDesign').removeClass('hide');
});
$('#toolWeb').click(function() {
  $('#resourceBox table:not(".tagWeb")').addClass('hide');
  $('#resourceBox table.tagWeb').removeClass('hide');
});
$('#toolStock').click(function() {
  $('#resourceBox table:not(".tagStock")').addClass('hide');
  $('#resourceBox table.tagStock').removeClass('hide');
});
$('#toolMarketing').click(function() {
  $('#resourceBox table:not(".tagMarketing")').addClass('hide');
  $('#resourceBox table.tagMarketing').removeClass('hide');
});
$('#toolDnD').click(function() {
  $('#resourceBox table:not(".tagDnD")').addClass('hide');
  $('#resourceBox table.tagDnD').removeClass('hide');
});
$('#toolGames').click(function() {
  $('#resourceBox table:not(".tagGames")').addClass('hide');
  $('#resourceBox table.tagGames').removeClass('hide');
});
$('#toolDraw').click(function() {
  $('#resourceBox table:not(".tagDraw")').addClass('hide');
  $('#resourceBox table.tagDraw').removeClass('hide');
});
$('#toolFood').click(function() {
  $('#resourceBox table:not(".tagFood")').addClass('hide');
  $('#resourceBox table.tagFood').removeClass('hide');
});


//Tags Column fly out
document.querySelector('.filterButton')
  .addEventListener('click', function() {
    if($('.tagsColumn').css('display') == 'block') {
    $('.filterButton').addClass('inactive');
    $('.filterButton').removeClass('active');
    $('.tagsColumn').slideUp();
	} else {
    $('.filterButton').addClass('active');
    $('.filterButton').removeClass('inactive');
    $('.tagsColumn').slideDown('slow');
	}
});

// Hide Tags Column on outside click
$('html').click(function() {
  $('.filterButton').addClass('inactive');
  $('.filterButton').removeClass('active');
  $('.tagsColumn').slideUp();
});

//exceptions:
$('.filterButton').click(function(event) {
  event.stopPropagation();
});
$('.tagsColumn').click(function(event) {
  event.stopPropagation();
});
