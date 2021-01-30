// ahover class付けたaタグ内画像に_ovをつける

var imgs = [];

$('img.ahover, .ahoverArea a img').not('.noHover').each(function () {
    var $this = $(this);
    var src = $this.attr('src');
    var hsrc = src.replace(/\.(gif|jpg|png)$/i, '_ov.$1');

    $this.attr('data-dsrc', src);
    $this.attr('data-hsrc', hsrc);

    imgs.push($('<img>').attr('src', hsrc));

});

$('img.ahover').parent('a').hover(function () {
    var $img = $(this).find('img');
    $img.attr('src', $img.attr('data-hsrc'));
}, function () {
    var $img = $(this).find('img');
    $img.attr('src', $img.attr('data-dsrc'));
});

$('.ahoverArea a').hover(function () {
    $(this).find('img').not('.noHover').each(function () {
        var $img = $(this);
        $img.attr('src', $img.attr('data-hsrc'));
    });
}, function () {
    $(this).find('img').not('.noHover').each(function () {
        var $img = $(this);
        $img.attr('src', $img.attr('data-dsrc'));
    });
});