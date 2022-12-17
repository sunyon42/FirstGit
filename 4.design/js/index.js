// let observer = new IntersectionObserver((e)=>{
//     e.forEach(박스 => {
//         if (박스.isIntersecting){
//             박스.target.style.opacity = 1;
//         } else {
//             박스.target.style.opacity = 0;
//         }
//     })
// })

//     let section = document.querySelectorAll('section')
//     observer.observe(section[0])
//     observer.observe(section[1])
//     observer.observe(section[2])
//     observer.observe(section[3])
//     observer.observe(section[4])
//     observer.observe(section[5])
//     observer.observe(section[6])
//     observer.observe(section[7])




var slider = document.querySelector('.slider'),
    slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slide'),
    slideswidth = 560,
    slidesmargin = 30,
    currentIdex = 0,
    slideCount = slide.length,
    Prev = document.querySelector('.prev'),
    Next = document.querySelector('.next');

    slides.style.width = (slideswidth + slidesmargin) * slideCount - slidesmargin

    function moveslides(num){
        slides.style.left = -num * 560 +'px';
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
            moveslides(0);
        }
    });



var slider = document.querySelector('.left_slider'),
    slides = document.querySelector('.left_slides'),
    slide = document.querySelectorAll('.left_slide'),
    slideswidth = 350,
    slidesmargin = 30,
    currentIdex = 0,
    slideCount = slide.length,
    Next = document.querySelector('.sixth .next');

    slides.style.width = (slideswidth + slidesmargin) * slideCount - slidesmargin

    function moveslides(num){
        slides.style.left = -num * 350 +'px';
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
