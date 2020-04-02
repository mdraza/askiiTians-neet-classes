/*---------- Video Play Button ------*/
$('#play-video').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

/*---------- Testimonial Carousal ---------*/
$('#owl-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
/*---------- WOW Animation Init ---------*/
new WOW().init();

/*---------- Header Course Section ---------*/
/*==== 1 Year ====*/
$('#show-more-content1').hide(500);
$('#btn-cont12').hide(500);

$('#show-more1').click(function () {
    $('#show-more-content1').show(500);
    $('#show-less1').show(500);
    $('#btn-cont12').show(500);
    $('#btn-cont11').hide(500);
    $('#crs-bx1').css("height", "380px");
    $(this).hide(500);
});

$('#show-less1').click(function () {
    $('#show-more-content1').hide(500);
    $('#show-more1').show(500);
    $('#btn-cont12').hide(500);
    $('#btn-cont11').show(500);
    $('#crs-bx1').css("height", "190px");
    $(this).hide(500);
});

/*==== 2 Year ====*/
$('#show-more-content2').hide();
$('#btn-cont22').hide();

$('#show-more2').click(function () {
    $('#show-more-content2').show(500);
    $('#show-less2').show(500);
    $('#btn-cont22').show(500);
    $('#btn-cont21').hide(500);
    $('#crs-bx2').css("height", "380px");
    $(this).hide(500);
});

$('#show-less2').click(function () {
    $('#show-more-content2').hide(400);
    $('#show-more2').show(500);
    $('#btn-cont22').hide(500);
    $('#btn-cont21').show(500);
    $('#crs-bx2').css("height", "190px");
    $(this).hide(500);
});

/*==== 3 Year ====*/
$('#show-more-content3').hide();
$('#btn-cont32').hide();

$('#show-more3').click(function () {
    $('#show-more-content3').show(500);
    $('#show-less3').show(500);
    $('#btn-cont32').show(500);
    $('#btn-cont31').hide(500);
    $('#crs-bx3').css("height", "380px");
    $(this).hide(500);
});

$('#show-less3').click(function () {
    $('#show-more-content3').hide(500);
    $('#show-more3').show(500);
    $('#btn-cont32').hide(500);
    $('#btn-cont31').show(500);
    $('#crs-bx3').css("height", "190px");
    $(this).hide(500);
});