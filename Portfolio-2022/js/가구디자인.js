document.addEventListener('DOMContentLoaded', function(){

    var $slider = document.querySelector('.slider'),
        $slides = document.querySelector('.slides'),
        $slide = document.querySelectorAll('.slide'),
        $navprev = document.getElementById('prev'),
        $slideHeigth = 0,
        $slidecount = $slide.length,
        $navnext = document.getElementById('next');

        for(var i = 0; i < $slidecount ; i++){
            if($slideHeigth < $slide[i].offsetHeigth){
                $slideHeigth = $slide[i].offsetHeigth;
            }
        }
        console.log($slideHeigth);
});
