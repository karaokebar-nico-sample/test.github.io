$(".menu-btn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav-sp").toggleClass('panelactive');
});

$("#g-nav-sp a").click(function () {
    $(".openbtn1").removeClass('active');
    $("#g-nav-sp").removeClass('panelactive');
});
