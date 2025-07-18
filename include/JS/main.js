// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
});


$(document).ready(function () {
    


    // Back to Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
    });
});