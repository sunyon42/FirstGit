$(function(){

    var $header = $('header');
    // var $item = $('.ability .item')
    var $strength =$(`.strength`);
    var $review =$(`.review`);
    var $scroll =$(`.scroll-down`);
    var boxes = document.querySelectorAll('.box')
    var $offset = 600;
    var $reviewOST = $review.offset().top - $offset;
    var $strengthOST = $strength.offset().top - $offset;
    // var $itemThreshold = $item.offset().top -$offset;
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('scroll');
        }else{
            $header.removeClass('scroll');
        }
        if($(this).scrollTop()>$strengthOST){
            $strength.find(`img`).addClass(`grow-img`);
            $strength.find(`h4`).addClass(`animate`);
        }
        if($(this).scrollTop()>$reviewOST){
            $review.find(`p`).addClass(`animate`);
        }
        
        // if($(this).scrollTop() > $itemThreshold){
            //     $item.addClass('active');
        // }
        if($(this).scrollTop() > 0){
            $scroll.addClass('scroll-op');
        }else{
            $scroll.removeClass('scroll-op');
        }
    });
    
    window.addEventListener('scroll',checkBoxes)
        checkboxes()

        function checkBoxes(){
            var triggerBottom = window.innerHeight / 5 * 4
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top
                if(boxTop < triggerBottom){
                    box.classList.add('show')
                } else{
                    box.classList.remove('show')
                }
            })
        }
    
    
    });
    