$(function(){
    var $searchBtn = $('.shopping_nav .search_btn')
        $searchForm = $('header form');

        $searchBtn.click(function(){
            $searchForm.toggleClass('active')
        });

        $('.slider ul').bxSlider();
});