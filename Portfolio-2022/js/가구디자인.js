document.addEventListener('DOMContentLoaded', function(){

    var $slider = document.querySelector('.slider'),
        $slides = document.querySelector('.slides'),
        $slide = document.querySelectorAll('.slide'),
        $navprev = document.getElementById('prev'),
        $slideHeigth = 0,
        $currentidex = 0;
        $slidecount = $slide.length,
        $navnext = document.getElementById('next');

        for(var i = 0; i < $slidecount ; i++){
            if($slideHeigth < $slide[i].offsetHeigth){
                $slideHeigth = $slide[i].offsetHeigth;
            }
        }
        console.log($slideHeigth);

        $slider.stlye.height = $slideHeigth + 'px';
        $slides.stlye.heigth = $slideHeigth + 'px';

        for(var a = 0; a < $slidecount; a++){
            $slide[a].stlye.left = a * 100 + '%'
        }

        function goToSlide(idx){
            $slider.stlye.left = -100 * (idx) +'%';
            $currentidex = idx;
        }

        $navprev.addEventListener('click' , function(){
            goToSlide($currentidex - 1);
        });
        $navnext.addEventListener('click' , function(){

            goToSlide($currentidex + 1);

        });
});



