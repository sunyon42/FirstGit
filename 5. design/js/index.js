$(function (){
    var $device =$(`.device`);
    var $features =$(`.features`);
    var $location =$(`.location`);
    var $offset=600;
    var $deviceOST = $device.offset().top - $offset;
    var $featuresOST = $features.offset().top - $offset;
    var $locationOST = $location.offset().top - $offset;

    $(window).scroll(function(){
        if($(this).scrollTop()>$deviceOST){
            $device.find(`img`).addClass(`animate`);
        }
        if($(this).scrollTop()>$featuresOST){
            $features.find(`img`).addClass(`grow-img`);
            $features.find(`h4`).addClass(`animate`);
        }
        if($(this).scrollTop()>$locationOST){
            $location.find(`.stripe`).addClass(`animate_down`);
        }
        
    });



});