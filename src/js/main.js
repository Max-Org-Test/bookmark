$(document).ready(function () {
    // Tabs
    $('.tabs-wrapper').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

    // Accordion
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });


    /* Sticky menu */

    stickybits("header", {useStickyClasses: true});


    // Mobile menu //

    $(".hamburger").on("click", function (e) {
        $(".nav-menu").toggleClass('active');
        if ($('.nav-menu').hasClass('active')) {
            $(".logo").css('visibility', 'hidden');
            $(".icon-icon-hamburger").hide();
            $(".icon-icon-close").show();

        } else {
            $(".logo").css('visibility', 'inherit');
            $(".icon-icon-close").hide();
            $(".icon-icon-hamburger").show();
        }
    });


    // Scroll to top
    var $toTop = $(".toTop");
    $toTop.click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $toTop.fadeIn();
        } else {
            $toTop.fadeOut();
        }
    });
});
