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
    var $grid = $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $("#clients-slider").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
    var addressString = "1303A E 19th St, Brooklyn, NY 11230, USA";
    var latlng = {
        lat: 40.61,
        lng: -73.95
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    var info = new google.maps.InfoWindow({
        content: addressString
    });
    marker.addListener('click', function () {
        info.open(map, marker);
    })
});