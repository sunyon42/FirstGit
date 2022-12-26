$(function(){

    var $header = $('header');
    // var $item = $('.ability .item')
    var $strength =$(`.strength`);
    var $scroll =$(`.scroll-down`);
    var $offset = 600;
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
        // if($(this).scrollTop() > $itemThreshold){
        //     $item.addClass('active');
        // }
        if($(this).scrollTop() > 0){
            $scroll.addClass('scroll-op');
        }else{
            $scroll.removeClass('scroll-op');
        }
    });



    var numAnimation = document.querySelectorAll('num_animation');
    var targetNum = numAnimation.getAttribute('data-rate')


    function changNum(idx){
        var num = 0;
        var targetNum = numAnimation[idx].getAttribute('date-rate');
        var timer1 = seInterval(function(){
            ++num;
            numAnimation[idx].innerText = num;
            if(num == targetNum){
                clearInterval(timer1);
            }
        },10);
    }
    for(var i =0; i<numAnimation.length;i++);
    changNum(i);
});