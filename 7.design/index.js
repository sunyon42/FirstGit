$(function(){

    var $header = $('header');
    var $item = $('.ability .item')
    var $strength =$(`.strength`);
    var $offset = 600;
    var $strengthOST = $strength.offset().top - $offset;
    var $itemThreshold = $item.offset().top -$offset;

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
        if($(this).scrollTop() > $itemThreshold){
            $item.addClass('active');
        }
    });

});