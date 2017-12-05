//Preloader
$(window).load(function() {
    $('.loader-inner').fadeOut();
    $('.loader').delay(400).fadeOut('slow');
});

$(function() {
    
    //Высота секции "Header"
    function heightDetect() {
        $('#header').css('height', $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    
    //Меню
    $('.toggle').click(function() {
        $(this).toggleClass('on');
        $('.top-menu').fadeToggle(600);
        $('.top-menu a').addClass('fadeInUp animated');
        $('.top-text').toggleClass('text-opacity');
        return false;
    });
    
    $('.top-menu a').click(function() {
        $('.toggle').toggleClass('on');
        $('.top-menu').fadeToggle(600);
        $('.top-text').removeClass('text-opacity');
    });
    
    //Анимация секции "Header"
    $('.top-text h1').animated('fadeInDown');
    $('.top-text p').animated('fadeInUp');
    
    //Анимация заголовков секций
    $('.section-header').animated('fadeInUp');
    
    //Анимация секции "About Me"
    $('.animation-1').animated('flipInY');
    $('.animation-2').animated('fadeInLeft');
    $('.animation-3').animated('fadeInRight');
    
    //Всплывающие окна секция "About Me"
    $('.popup').magnificPopup({type:"image"});
    
    //Выравнивание блоков по высоте секции "Resume"
    $('.resume-item').equalHeights();
    
    //Анимация секции "Resume"
    $('.resume-left .resume-item').animated('fadeInLeft');
    $('.resume-right .resume-item').animated('fadeInRight');
    
    //Tabs секции "Portfolio"
    $('.wrapper-tab .tab').click(function() {
        $('.wrapper-tab  .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn(500);
    }).eq(0).addClass('active');
    
    //Галерея 1 секции "Portfolio"
    $('.galery-1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300
    });
    
    //Галерея 2 секции "Portfolio"
    $('.galery-2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300
    });
    
    //Галерея 3 секции "Portfolio"
    $('.galery-3').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300
    });
    
    //Валидация формы
    $("input, select, textarea").jqBootstrapValidation();
    
    //Анимация секции "Сontacts"
    $('.contacts-left').animated('fadeInLeft');
    $('.contacts-right').animated('fadeInRight');
    
    //Плавный скролл по секциям
    $(".top-menu ul a").mPageScroll2id();
    
    //SVG Fallback для картинок
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

});//redy end


