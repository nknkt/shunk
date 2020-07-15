$(function () {
	var h = $(window).height(); // ウィンドウの高さを取得
	var spead = 600; // フェードインスピード
	$('.contents').each(function () {
		$(this).css({
			height: h
		});
	});
	$(window).on('scroll', function () {
		var scrollpx = $(this).scrollTop(); //スクロール量観測
		$('.para').each(function () {
			var thisTop = $(this).offset().top; //コンテンツの高さ
			var thisShow = thisTop - h / 1.3; //出現位置
			if (scrollpx >= thisShow) {
				$(this).stop().animate({
					opacity: 1
				}, spead);
			}/* else {
				$(this).stop().animate({
					opacity: 0
				}, spead);
			}*/
		});
	});
});
