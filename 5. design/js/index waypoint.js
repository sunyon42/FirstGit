$(function(){

    var $device = $('.device');
    var $features = $('.features')
    var $locations = $('.location')

    var waypoints1 = $device.waypoints(function() {
        $device.find('img').addClass('animate')
    },{
        offset: '50%'
    });
    var waypoints2 = $features.waypoints(function() {
        $device.find('img').addClass('grow-img');
        $device.find('h4').addClass('animate');
    },{
        offset: '50%'
    });
    var waypoints3 = $locations.waypoints(function() {
        $location.find('.stripe').addClass('animate_down');
    },{
        offset: '50%'
    });


});