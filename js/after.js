jQuery(function ($) {
    let scrollPos;

    /*$('.js-btn__sidemenu').on('click', function () {
        if ($('.l-sidemenu, .p-sidemenu__shadowScreen').hasClass('slideOut')) {
            scrollPos = $(window).scrollTop(); //現在のスクロール位置
            $('body').addClass('fix').css('top', -scrollPos + 'px');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').removeClass('slideOut');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').addClass('slideIn');
        } else if ($('.l-sidemenu, .p-sidemenu__shadowScreen').hasClass('slideIn')) {
            $('body').removeClass('fix').css('top', 0 + 'px');
            window.scrollTo(0, scrollPos); //初期化
            $('.l-sidemenu, .p-sidemenu__shadowScreen').removeClass('slideIn');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').addClass('slideOut');
        } else {
            scrollPos = $(window).scrollTop(); //現在のスクロール位置
            $('body').addClass('fix').css('top', -scrollPos + 'px');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').addClass('slideIn');
        }
    });

    $(window).resize(function () {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $('body').removeClass('fix').css('top', 0 + 'px');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').removeClass('slideOut');
            $('.l-sidemenu, .p-sidemenu__shadowScreen').removeClass('slideIn');
        }
    });*/
    $('.p-wave').on({
        'mouseenter': function() {
            $('.p-wave').addClass('is-wave');
        },
        'mouseleave': function() {
            $('.p-wave').removeClass('is-wave');
        }
    });
});