/**
 * Created by Anmol on 2017-07-01.
 */

$(function() {
    var $house = $('#house > img');
    $('#navigation').hide().slideDown();
    $house.hide().fadeIn(2000);
    $("#bg").hide().fadeIn(1000);
    $("header").hide().delay(1000).fadeIn(1000);
    var $blogLi = $('#containerBlog > ul > li');
    $("#containerBlog > ul li > h3, #containerBlog > ul li > p").css("opacity", 0);
    $blogLi.hide().delay(500).each(function(){
        $(this).delay(1000*$(this).index()).fadeIn(1000);
        $(this).find("h3").delay(1000*($(this).index() + 1)).animate({opacity:1},1000);
        $(this).find("p").delay(1250*($(this).index() + 1)).animate({opacity:1},1000);
    });

    var $containerMe = $('#containerMe');
    $containerMe.css({
        'opacity': 0,
        'width': '50%'
    });
    var $containerQual = $('#containerQual');
    $containerQual.css({
        'opacity': 0,
        'width': '50%'
    });
    var $containerProj = $('#containerProj');
    $containerProj.css({
        'opacity': 0,
        'width': '50%'
    });
    var $containerCon = $('#containerCon');
    $containerCon.css({
        'opacity': 0,
        'width': '50%'
    });
    //$("#containerMe").css('opacity', 0);


    $house.on('click', function(){
        $('#navigation').toggle();
        if($('#navigation').css('display') === 'none'){
            $house.css('opacity', 1);
        }
        if($('#navigation').css('display') === 'block'){
            $house.css('opacity', 0.7);
        }
    });


    var list = ['Designer,', 'Thinker.', 'I am a <span id="flash">Developer,</span></h3>', 'Debater,'];
    var counter = 3;
    var h3 = $('#bg h3');

    function flash(){
        h3.animate({
            opacity:0.0,
            paddingLeft:'+=40'
        }, 1000, function(){
            if (counter === 2){
                h3.removeAttr('class');
            } else{
                h3.attr('class', 'flash');
            }
            h3.html(list[counter]);
            counter += 1;
            if(counter >= list.length){
                counter = 0;
            }
        });
        h3.animate({
            paddingLeft:'-=40'
        }, 100, function() {});
        h3.animate({
            opacity:1
        }, 1000, function(){});
    }

    setInterval(flash, 3000);

    /*function Scroll(){
        var ypos = window.pageYOffset;
        if(ypos > 800 && $('#containerMe').css('opacity') < 0.99){
            $('#containerMe').animate({
                opacity:1
            },2000, function(){});
        }
        if(ypos < 700 && $('#containerMe').css('opacity') > 0.01){
            $('#containerMe').animate({
                opacity:0
            },1000, function(){});
        }
    }

    window.addEventListener('scroll', Scroll, false);
    */

    $(window).on('scroll', function(){
        var heightFirst = $('#navigation').height() + $('#bg').height() + 100;
        var heightSecond = $containerMe.height() + heightFirst + 200;
        var heightThird = heightSecond + $containerQual.height() + 200;
        var heightFourth = $containerProj.height() + heightThird + 200;
        if ($(window).scrollTop() > heightFirst){
            $containerMe.animate({
                opacity:1,
                width:'100%'
            }, 2000).clearQueue(true);
        }
        if ($(window).scrollTop() > heightSecond){
            $containerQual.animate({
                opacity:1,
                width:'100%'
            }, 1500).clearQueue(true);
        }
        if ($(window).scrollTop() > heightThird){
            $containerProj.animate({
                opacity:1,
                width:'100%'
            }, 1500).clearQueue(true);
        }
        if ($(window).scrollTop() > heightFourth){
            $containerCon.animate({
                opacity:1,
                width:'100%'
            }, 1500).clearQueue(true);
        }
    });

    function animateIn(item, amount, time){
        item.clearQueue();
        item.animate({
            opacity: amount
        }, time, function(){
        });
    }

    function animateOut(item){
        item.clearQueue();
        item.animate({
            opacity:0.0
        }, 500, function(){
        });
    }

    var $footerItems = $('footer > ul > li > p');
    $footerItems.on("mouseover", function(){
        animateIn($(this).prev(), 0.7, 500);
    });
    $footerItems.mouseleave(function(){
        animateOut($(this).prev());
    });

    var $navigation = $('#navigation > ul > li > a');
    var $meFill = $('#containerMe > #me > #fill1');
    var $likeFill = $('#containerMe > ul > li > .wall');
    var $projFill = $('#containerProj > ul > li > a');
    var $conFill = $('#containerCon > ul > li > .nest > a');

    $navigation.on('mouseover', function(){
        animateIn($(this).prev(), 0.7, 250);
    });
    $navigation.mouseleave(function(){
        animateOut($(this).prev());
    });

    $meFill.on("mouseover", function(){
        animateIn($(this), 0.7, 500);
    });
    $meFill.mouseleave(function(){
        animateOut($(this));
    });

    $likeFill.on("mouseover", function(){
        animateIn($(this), 0.7, 500);
    });
    $likeFill.mouseleave(function(){
        animateOut($(this));
    });

    $projFill.on('mouseover', function(){
        animateIn($(this).prev(), 0.7, 500);
    });
    $projFill.mouseleave(function(){
        animateOut($(this).prev());
    });

    $conFill.on('mouseover', function(){
        animateIn($(this), 1, 500);
    });
    $conFill.mouseleave(function(){
        animateOut($(this));
    })



});