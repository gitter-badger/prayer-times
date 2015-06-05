FastClick.attach(document.body);

$('body').on('touchmove', function (e) {
    if (!$(e.target).hasClass("scrollable")) {
        e.preventDefault();
    }
});


$('.time').on('click', function () {
    $(".time--active").removeClass("time--active");
    $(this).addClass("time--active");

    $('.times').attr('data-time', $(this).data('time'));
});