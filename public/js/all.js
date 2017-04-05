$(function ($) {
    var $panes = $(".js-pane");
    $.each($panes, function (index, pane) {
        if (index !== 0) {
            $(pane).hide();
        }
    });
    var $listItems = $("#widget-list li");
    $listItems.on("click", function (ev) {
        var activeClass = "tuiv2_list-item--active";
        var $target = $(ev.target).closest("li");
        $("." + activeClass).removeClass(activeClass);
        $target.addClass(activeClass);
        $.each($panes, function (index, pane) {
            var $pane = $(pane);
            if ($pane.css('display') !== "none" && $pane.attr("id") !== $target.data().pane) {
                $pane.hide();
            }
            else if ($pane.attr("id") === $target.data().pane) {
                $pane.show();
            }
        });
    });
});
