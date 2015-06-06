FastClick.attach(document.body);


$('body').on('touchmove', function (e) {
    if (!$(e.target).hasClass("scrollable")) {
        e.preventDefault();
    }
});


// şimdilik rastgele bir vakit seçiyor.
// vakit değiştiğindeki animasyonu da rastgele seçiyor.

randomTime();

function randomTime() {
    setInterval(function () {
        var $selectedItem = $(".time").eq(getRandomInt());

        $(".time--active").removeClass("time--active");
        $selectedItem.addClass("time--active");

        $('.times').attr('data-time', $selectedItem.data('time'));
    }, 4000);
}

function getRandomInt() {
    return Math.floor(Math.random() * ($(".time").length - 0)) + 0;
}


// Ayarları aç düğmesi (konum seçme menüsü)

$(".settings-btn--setting").on("click", function () {
    $(".settings").attr("data-panel-show", true);
});


// Seçili konumu kaydet, ayarlardan çık

$(".settings-btn--done").on("click", function () {
    $(".settings").attr("data-panel-show", false);
});