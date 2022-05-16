        // <!-- Slider About page -->
$('.slider__about-wrap-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
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

body.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('header__menu')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        burger.classList.remove('show');
        body.classList.remove('stop-scroll');
    }
});

        // <!-- Solution -->
var consistent = document.querySelector('.consistent');
var consistent_text = document.querySelector('.consistent-text');
var customer = document.querySelector('.customer');
var customer_text = document.querySelector('.customer-text');
var innovative = document.querySelector('.innovative');
var innovative_text = document.querySelector('.innovative-text');
var business = document.querySelector('.business');
var business_text = document.querySelector('.business-text');

consistent.addEventListener('click', () => {
    consistent_text.classList.add('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.remove('visible');
    consistent.classList.add('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

customer.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.add('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.remove('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.add('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

innovative.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.add('visible');
    business_text.classList.remove('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.add('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

business.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.add('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.add('solution__box-subject-link--active');
});

        // <!-- Slider Home page -->
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
    });