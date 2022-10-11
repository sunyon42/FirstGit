document.addEventListener('DOMContentLoaded', function(){

    var slider = document.querySelector('.slider'),
        slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slide'),
        prev = document.getElementById('prev'),
        slideHeigth = 0,
        next = document.getElementById('next');

        slideHeigth = slide[0].offsetHeigth;
        console.log(slideHeigh);
});
