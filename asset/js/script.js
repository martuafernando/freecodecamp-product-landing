function $(item) {
    return document.querySelectorAll(item);
}

let home = $('#header')[0].getBoundingClientRect().top;
let about = $('#about-us')[0].getBoundingClientRect().top;
let products = $('#products')[0].getBoundingClientRect().top;
let testimoni = $('#testimoni')[0].getBoundingClientRect().top;

$('body')[0].onscroll = function () {
    if ($('html')[0].scrollTop > testimoni) {
        $('.nav-link[href="#hero-image"]')[0].classList.remove('active');
        $('.nav-link[href="#about-us"]')[0].classList.remove('active');
        $('.nav-link[href="#products"]')[0].classList.remove('active');
        $('.nav-link[href="#testimoni"]')[0].classList.add('active');
    }
    else if ($('html')[0].scrollTop > products && $('html')[0].scrollTop < testimoni) {
        $('.nav-link[href="#hero-image"]')[0].classList.remove('active');
        $('.nav-link[href="#about-us"]')[0].classList.remove('active');
        $('.nav-link[href="#products"]')[0].classList.add('active');
        $('.nav-link[href="#testimoni"]')[0].classList.remove('active');
    }
    else if ($('html')[0].scrollTop > about && $('html')[0].scrollTop < products) {
        $('.nav-link[href="#hero-image"]')[0].classList.remove('active');
        $('.nav-link[href="#about-us"]')[0].classList.add('active');
        $('.nav-link[href="#products"]')[0].classList.remove('active');
        $('.nav-link[href="#testimoni"]')[0].classList.remove('active');
    }
    else if ($('html')[0].scrollTop > home && $('html')[0].scrollTop < about) {
        $('.nav-link[href="#hero-image"]')[0].classList.add('active');
        $('.nav-link[href="#about-us"]')[0].classList.remove('active');
        $('.nav-link[href="#products"]')[0].classList.remove('active');
        $('.nav-link[href="#testimoni"]')[0].classList.remove('active');
    }
}