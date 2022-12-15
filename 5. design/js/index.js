$(function(){

    var $device = $('.device');
    var $offset = 500;
    var $deviceOST = $device.offset().top - $offset;
    var $featuresOST = $('.features').offest().top - $offset;

    $(window).scroll(function(){
        if($(this).scrollTop() > $deviceOST){
            $device.find('img').addClass('animate');
        }
        if($(this).scrollTop() > $deviceOST){
            $device.find('img').addClass('grow-img');
            $device.find('h4').addClass('animate');
        }
    });


});