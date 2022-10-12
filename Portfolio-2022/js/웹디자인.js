

var slider = document.querySelector('.slider'),
slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slide'),
slideswidth = 1000,
slidesmargin = 30,
currentIdex = 0,
slideCount = slide.length,
Prev = document.querySelector('.prev'),
Next = document.querySelector('.next');

slides.style.width = (slideswidth + slidesmargin) * slideCount - slidesmargin

function moveslides(num){
    slides.style.left = -num * 1000 +'px';
    currentIdex = num;
}
Next.addEventListener('click', function(){
    if(currentIdex < slideCount - 1){
        moveslides(currentIdex + 1);
        console.log(currentIdex);
    }else{
        moveslides(0);
    }
});

Prev.addEventListener('click', function(){
    if(currentIdex > 0){
        moveslides(currentIdex - 1);
        console.log(currentIdex);
    }else{
        moveslides(currentIdex - 1);
    }
});




