// THIS SHOWS THE MOUSE POSITION //



document.onmousemove = function(e) {
    x = e.pageX;
    y = e.pageY;

    // RESIZES HEADER BASED ON MOUSE POSITION //


    if ($('body').scrollTop() < 100) {
        $('header').removeClass('smaller');
        $('header').css({ height: 75 });
    } else if ((y - $('body').scrollTop()) < 120 && (y - $('body').scrollTop()) > 75) {
        $('header').css({ height: (40 * (120 / (y - $('body').scrollTop()))) });
    } else if ((y - $('body').scrollTop()) < 75) {
        $('header').css({ height: 75 });

    } else {
        $('header').addClass('smaller');
        $('header').css({ height: 40 });
    };
};


// RESIZE HEADER ON HOVER //

$('header').hover(function() {
        $('header').removeClass('smaller');
    },
    function() {
        if ($('body').scrollTop() > 100) {
            $('header').addClass('smaller');
        }
    });


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


function handleScroll(event, delta, maxX, sender) {

    sender.scrollLeft -= (delta);
    var x = $('#photos').scrollLeft();
    if (x < maxX && x > 0) {
        event.preventDefault();
        $('body').scrollTop(830);
    }

}

function scrl() {
    window.addEventListener('scroll', function(e) {
        var y = $('body').scrollTop();
        var startX = $('#photos').scrollLeft();
        var maxX = (window.innerWidth) * 2;



        if (y > 827 && startX < maxX) {
            $("#photos").mousewheel(function(event, delta) {
                handleScroll(event, delta, maxX, this);
            });
        } else if (y < 829 && startX > 40) {
            $('body').scrollTop(830);
            $("#photos").mousewheel(function(event, delta) {
                handleScroll(event, delta, maxX, this);
            });

        } else {
            $('#photos').off('mousewheel');

        }
    });
};

window.onload = scrl();

//  TESTING //

var $root =     $('html, body');
var navHeight = 40;

// top //

$('.icon-link').click(function() {
    var y = $('body').scrollTop();
    var href = $.attr(this, 'href');
     var animateFinal = function() {
        $('#photos').animate({
            scrollLeft: 0
        }, 1000, animateTop);
    };

    var animatePhotos = function(callback) {
        $('#photos').animate({
            scrollLeft: 0
        }, 1000, callback);
    };
    var animateTop = function(){
         $root.stop().animate({
      scrollTop: 0
    }, 1000);
    }
    console.log(y);
    if(y === $('#photos').offset().top - navHeight) {
        animatePhotos(animateTop);
    }
    else if(y > $('#photos').offset().top - navHeight){
        $root.stop().animate({
            scrollTop: $(href).offset().top - navHeight
        }, 1000, animateFinal);
    }

    else{
    animateTop();
    }

    return false;
});



// First link
$('.about-link').click(function() {
    var y = $('body').scrollTop();
    var href = $.attr(this, 'href');
    var animatePhotos = function() {
        $('#photos').animate({
            scrollLeft: $root.outerWidth()
        }, 1000);
    };
    console.log(y);
    if(y === $('#photos').offset().top - navHeight) {
        animatePhotos();
    }
    else{

    $root.stop().animate({
      scrollTop: $(href).offset().top - navHeight
    }, 1500, animatePhotos);
    }

    return false;
});
// Work Link
$('.work-link').click(function() {
    var y = $('body').scrollTop();
    var href = $.attr(this, 'href');
    var animatePhotos = function() {
        $('#photos').animate({
            scrollLeft: 0
        }, 1000);
    };
    console.log(y);
    if(y === $('#photos').offset().top - navHeight) {
        animatePhotos();
    }
    else{

    $root.stop().animate({
      scrollTop: $(href).offset().top - navHeight
    }, 1000, animatePhotos);
    }

    return false;
});


$('html, body').bind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart', function(e) {
    if (e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel' || e.type === 'touchstart') {
      $root.stop();
    }
});




// RESUME CLICK SHOWS RESUME //

$('#resumeClick').click(function() {
        console.log("does not have class show");
        $('#resume').addClass('show');
        $('#main-div').addClass('resume');
});

$('#main-div').click(function(){
     if ($('#resume').hasClass('show') === false) {
        return
    }
    else {
         $('#resume').removeClass('show');
        $('#main-div').removeClass('resume');
    }
});

$('#resume').click(function(){
     if ($('#resume').hasClass('show') === false) {
        return
    }
    else {
         $('#resume').removeClass('show');
        $('#main-div').removeClass('resume');
    }
});

// NAME TYPING ITSELF OUT //


    var arr =['J', 'a', 'm', 'i', 'e', ' ','W', 'a', 't','e','r','s',' ', 'W', 'e' ,'b',' ', 'D','e','s','i','g','n'];
    var i = 0;
    var comment = "";
    function slowtype() {
        comment = comment + arr[i];
        $('#headline').text(comment);

         if(++i == arr.length)
            {
            return;
            }
        window.setTimeout(slowtype, 100);
}

slowtype();


















