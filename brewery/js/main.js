function sizer() {
    var gk = $('#gatekeeper').innerHeight();

    $('#box').css({ marginTop: gk * .2 });
};
sizer();
window.addEventListener('resize', function() {
    sizer()
});


$('#no').on('click', function () {
	$('#not21').css({display: 'block'})
});

 $('#yes').on('click', function () {
    $('#gatekeeper').fadeOut(1000);
    $('#entire').css({opacity: 1});
});

$(function(){  
  $('#gatekeeper').fadeIn(2000);
});


// INITIALIZES CAROUSEL //

$(document).ready(function(){
  $('.your-class').slick({
    'setting-name': 'setting-value'
  });
});
	