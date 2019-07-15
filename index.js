$(document).ready(function () {

    new TypeIt('#jumbotron-text', {
        speed: 50,
        waitUntilVisible: true,
        loop: true,
        loopDelay: 5000
    })
        .type('<span class="baskerville font-weight-bold" style="font-size: 38px;">Welcome to My Portfolio</span>')
        .pause(2000)
        .break()
        .type('<span class="baskerville" style="font-size: 28px;">I\'m Web Developer.</span>')
        .go();

    // scroll function
    $(window).on('scroll', function () {
        // if scroll not in top
        if ($(window).scrollTop()) {
            $('nav').css({
                'background-color': '#151B19',
            });
            $('nav').removeClass('pt-4');
            $('.kaushan').css('font-size', '20px');
            $('.navbar-nav').css('font-size', '18px');
        } else {
            $('nav').css({
                'background-color': '',
            });
            $('nav').addClass('pt-4');
            $('.kaushan').css('font-size', '28px');
            $('.navbar-nav').css('font-size', '20px');
        }
    })

    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarNav a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});
