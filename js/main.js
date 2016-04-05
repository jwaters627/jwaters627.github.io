
// SRHINK HEADER WHEN SCROLLED FROM TOP //


function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = $('body').scrollTop(),
            shrinkDistance = 100;
        if (distanceY > shrinkDistance) {
            $('header').addClass("smaller");
        } else {
            $('header').removeClass("smaller");
        }
    });
}
window.onload = init();


// DROP DOWN MENU ON CLICK OF BURGER  //


$(".burg").click(function() {
    console.log($('#about').scrollTop());
    $(".menu").toggleClass('open');
});


// HIDE BURGER MENU ON CLICK ANYWHERE ELSE ON PAGE //

document.getElementById('main-div').onclick = function(e) {
    if (e.target != document.getElementById('menu')) {
        $('.menu').removeClass('open');
    }
};


// ABOUT SECTION SCROLLING IMAGES //


function scrl() {
    window.addEventListener('scroll', function(e) {
        var y = $('body').scrollTop();
        if (y > 827 && y < 1100) {
        	

            $("#photos").mousewheel(function(event, delta) {

                this.scrollLeft -= (delta);
                var x = $('#photos').scrollLeft();
                console.log(x);
                console.log("this is the screen width " + screen.width);
                if (x < (screen.width - (screen.width * .2)) * 2 && x > 0) {
                    event.preventDefault();
                    $('body').scrollTop(828);
                }

                if (x > 1140 && x < 2180) {
                    $('#p1').addClass('open');
                    $('#p2').addClass('open');
                    $('#p3').removeClass('open');
                } else if (x < 1140) {
                    $('#p1').removeClass('open');
                    $('#p2').removeClass('open');
                } else if (x > 2180) {
                    $('#p3').addClass('open');
                    $('#p2').removeClass('open');
                }
                $('#inPic1').css({ right: -580 + x * .32 });
                $('#inPic2').css({ right: -1100 + x * .75 });
                $('#inPic3').css({ right: -1200 + x * 0.5 });
            });
        } else {
            $('#photos').off('mousewheel');
        }
    })
};

window.onload = scrl();

//  TESTING //
























