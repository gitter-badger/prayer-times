FastClick.attach(document.body);

$('body').on('touchmove', function (e) {
    if (!$(e.target).hasClass("scrollable")) {
        e.preventDefault();
    }
});


var date = new Date();
//date.setHours(3, 30);
var nowDate = date.getTime(),
    getDate,
    selectDate,
    selectedIndex,
    j = 5;

$.getJSON("http://www.haber7.com/api/widget/pray-times/34?format=json&callback=?", function (times) {

    $(".time").each(function (index) {

        $(this).find(".time_time").text(times[index]);

        date.setHours(times[index].substr(0, 2), times[index].substr(3, 4));
        getDate = date.getTime();

        if (nowDate <= getDate) {
            j--;
            selectedIndex = j;
        }
    });


    if (!selectedIndex) selectedIndex = j;


    var $selectedTime = $(".time").eq(selectedIndex);
    $(".time--active").removeClass("time--active");
    $selectedTime.addClass("time--active");
    $('.times').attr('data-time', $selectedTime.data('time'));


});


// Ayarları aç düğmesi (konum seçme menüsü)

$(".settings-btn--setting").on("click", function () {
    $(".settings").attr("data-panel-show", true);
});


// Seçili konumu kaydet, ayarlardan çık

$(".settings-btn--done").on("click", function () {
    $(".settings").attr("data-panel-show", false);
});