// <!-- Slider About page -->
$('.slider__about-wrap-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                infinite: true,
                dots: true,
            }
        }
    ]
});
