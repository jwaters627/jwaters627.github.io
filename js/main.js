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
        $('body').scrollTop(828);
    }

    $('#triangle1').css({ top:870 - x * .32 });

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
            $('body').scrollTop(828);
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

var width = $('body').innerWidth() / 2 ;
console.log(width);



$('#triangle1').css({"border-left-width": width});
$('#triangle1').css({"border-right-width": width});










