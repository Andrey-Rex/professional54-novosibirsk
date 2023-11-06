$(document).ready(function(){
    $('.discount_button').click(function(event){
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).text('Узнать кодовое слово');
            $(this).removeClass('active');
        } else {
            $(this).text('МЕМОРИАЛ');
            $(this).addClass('active');
        }
        return false;
    });
    $('.mobile_menu').click(function(){
        $('.navigation_list').toggleClass('active');
    });
    if ($(window).width()<744){
        $('#landscaping_slider').slick({
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            draggable: true,
        });
    }


});
