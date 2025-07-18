document.addEventListener("DOMContentLoaded", function () {
    let countersStarted = false;

    const counters = document.querySelectorAll('.stat-number.counter');

    const startAllCounters = () => {
        if (countersStarted) return;
        countersStarted = true;

        const duration = 2000; // الوقت الإجمالي للعد

        counters.forEach(el => {
            let countTo = parseInt(el.getAttribute('data-count'));
            let count = 0;
            let intervalTime = Math.max(10, duration / countTo); // لضمان أداء سلس

            let counter = setInterval(function () {
                count++;
                el.textContent = count;

                if (count >= countTo) {
                    clearInterval(counter);

                    // لو العنصر خاص بعداد "عميل راضٍ" أضف +
                    if (el.closest('.stat-box').textContent.includes('عميل')) {
                        el.textContent = count + '+';
                    }
                }
            }, intervalTime);
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAllCounters();
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});



$(document).ready(function () {

    // Mobile menu toggle animation
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
        var spans = $(this).find('span');

        if ($(this).hasClass('active')) {
            spans.eq(0).css('transform', 'rotate(45deg) translate(5px, 5px)');
            spans.eq(1).css('opacity', '0');
            spans.eq(2).css('transform', 'rotate(-45deg) translate(7px, -6px)');
        } else {
            spans.css({
                'transform': 'none',
                'opacity': '1'
            });
        }
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').on('click', function () {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
            $('.navbar-toggler').removeClass('active');
            $('.navbar-toggler span').css({
                'transform': 'none',
                'opacity': '1'
            });
        }
    });

    // Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
    });
});