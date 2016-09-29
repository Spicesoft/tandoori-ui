$(function ($) {
    $(".list__collapsable").collapse();

    $(".list__clickable").on("click", function(ev) {
        $(this).next().collapse("toggle");
    });

    $(".dropdown-menu").dropdown();
    $(".dropdown").on("show.bs.dropdown", function () {
        $(this).find(".dropdown-menu").slideDown(150);
    });
    $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".dropdown-menu").slideUp(150);
    });
});
