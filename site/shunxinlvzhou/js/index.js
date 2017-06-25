(function(){
    var newsSwiper, bannerSwiper;

    function onResize(){
        var w = window.innerWidth;

        if(w > 768){
            newsSwiper.params.slidesPerView = 3;
            newsSwiper.params.spaceBetween = 30;
            console.log(1)
        }

        if(w <= 768){
            newsSwiper.params.spaceBetween = 10;
            newsSwiper.params.slidesPerView = 2;console.log(2)
            /*newsSwiper.reLoop();*/
        }

        if(w <= 414){console.log(3)
            newsSwiper.params.slidesPerView = 1;
        }
    }

    function init(){

        newsSwiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            slidesPerView: 3,
            nextButton: '.swiper-next-arr',
            prevButton: '.swiper-prev-arr'
        });

        bannerSwiper = new Swiper('#js-banner-swiper', {
            loop: true,
            autoplay: 2000,
            speed: 600
        });

        bindEvents();
    }

    function handleScroll(){
        var $mod = $('.mod'),
            wh = $(window).height(),
            stop = $(window).scrollTop(),
            $scrollTop = $('#js-scroll-top');

        $.each($mod, function(mod, i){
            var $this = $(this),
                top = $this.offset().top;

            console.log(top, wh, stop)
            if(top < wh + stop){
                $this.addClass('show')
                .find('.animated')
                .each(function(m, i){
                    $(this).addClass($(this).data('an')).removeAttr('data-an')
                });
            }
        });

        if(stop > 100){
            $scrollTop.removeClass('fadeOutDown').addClass('animated fadeInUp');
        }else{
            if($scrollTop.is(':visible')){
                $scrollTop.removeClass('fadeInUp').addClass('animated fadeOutDown');
            }

        }
    }

    function bindEvents(){
        var stime = 0,
            rtime = 0;
        $(window).on('resize', function(){
            var now = new Date().getTime();

            if(now - rtime > 50){
                onResize();
                rtime = now;
            }

        }).trigger('resize');

        $(window).on('scroll', function(){
            var now = new Date().getTime();

            if(now - stime > 50){
                handleScroll();
                stime = now;
            }

            return false;
        }).trigger('scroll');

        $('#js-scroll-top').on('click', function(){
            $('html,body').animate({scrollTop: 0})
        })
    }

    init();
})();