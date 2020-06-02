//click event in jquery is click unlike js where it is onclick

$(function () {
    $('#preloader').delay(500).fadeOut();
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});