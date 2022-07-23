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

// <!-- Burger menu -->
var menu = document.querySelector('.header__menu');
var burger = document.querySelector('.icon__menu');
var overlay = document.querySelector('.header__menu-list');
var closeicon = document.querySelector('.close-icon__menu');
var body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('stop-scroll');
});

closeicon.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('stop-scroll');
});

body.addEventListener('click', ({target}) => {
    if (target.classList.contains('header__menu')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        burger.classList.remove('show');
        body.classList.remove('stop-scroll');
    }
});

// <!-- Solution -->
var solutionButton = document.querySelectorAll('.solution__box-subject-link');
var solutionText = document.querySelectorAll('.solution__box-info');

solutionButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        solutionText.forEach((text, j) => {
            if (i === j) {
                solutionButton[j].classList.add('solution__box-subject-link--active')
                solutionText[j].classList.add('solution__box-info--visible')
            } else {
                solutionButton[j].classList.remove('solution__box-subject-link--active')
                solutionText[j].classList.remove('solution__box-info--visible')
            }
        })
    })
})

// <!-- Slider Home page -->
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
});
