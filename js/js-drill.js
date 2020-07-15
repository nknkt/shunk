$(function () {
    $.util.rollover();
});

//ロールオーバー
$.util = {
    rollover: function (options) {

        $(".fade").find("img").parent().each(function () {
            $(this).css("position", "relative");
            $(this).find("img").addClass("off");
            $(this).append($(this).find("img.off").clone(true).removeClass("off").addClass("on"));
            var onsrc = $(this).find("img.on").attr("src").replace(new RegExp('(_ov)?(\.gif|\.jpg|\.png\@2x.gif|\@2x.jpg|\@2x.png)$'), "_ov$2");
            $(this).find("img.on").attr("src", onsrc);
        });

    }
}