FastClick.attach(document.body);

$('body').on('touchmove', function (e) {
    if (!$(e.target).hasClass("scrollable")) {
        e.preventDefault();
    }
});


randomTime();

function randomTime() {
    setInterval(function () {
        var $selectedItem = $(".time").eq(getRandomInt());

        $(".time--active").removeClass("time--active");
        $selectedItem.addClass("time--active");

        $('.times').attr('data-time', $selectedItem.data('time'));
    }, 3000);
}

function getRandomInt() {
    return Math.floor(Math.random() * ($(".time").length - 0)) + 0;
}