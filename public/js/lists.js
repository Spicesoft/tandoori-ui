$(function ($) {
    $(".list__collapsable").collapse();

    $(".list__clickable").on("click", function(ev) {
        $(this).next().collapse("toggle");
    });
});
