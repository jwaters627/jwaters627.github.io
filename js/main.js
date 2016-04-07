// SRHINK HEADER WHEN SCROLLED FROM TOP //


// function init() {
//     window.addEventListener('scroll', function(e) {
//         var distanceY = $('body').scrollTop(),
//             shrinkDistance = 100;
//         if (distanceY > shrinkDistance) {
//             $('header').addClass("smaller");
//         } else {
//             $('header').removeClass("smaller");
//         }
//     });
// }
// window.onload = init();


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

}

function scrl() {
    window.addEventListener('scroll', function(e) {
        var y = $('body').scrollTop();
        var startX = $('#photos').scrollLeft();
        var maxX = (window.innerWidth * 0.99) * 2;

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

// THIS SHOWS THE MOUSE POSITION //

document.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;
    
// RESIZES HEADER BASED ON MOUSE POSITION //


    if($('body').scrollTop() < 100){
     $('header').removeClass('smaller');
     $('header').css({ height: 70}); 
    }
    else if((y - $('body').scrollTop()) < 120 && (y - $('body').scrollTop()) > 70){
        $('header').css({ height: (40 * (120/(y - $('body').scrollTop())))});
    }
    else if((y - $('body').scrollTop()) < 70 ){
        $('header').css({ height: 70}); 

    }
    else{
        $('header').addClass('smaller');
        $('header').css({ height: 40});
    };
};
















