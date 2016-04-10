$("nav ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    // animate the scroll
    y = $(this.hash).offset().top - 50;
    if ((y - window.pageYOffset) > 0) {
        time = y - window.pageYOffset;
    } else {
        time = window.pageYOffset - y;
    }

    $('html, body').animate({
        scrollTop: y
    }, time);
});
