(function ($) {
	var nav_btn = ".nav_btn";
	var sp_nav = "nav";

	$(function () {
		var is_mobile = false;
		if (
			navigator.userAgent.indexOf("iPhone") > 0 ||
			navigator.userAgent.indexOf("iPad") > 0 ||
			navigator.userAgent.indexOf("iPod") > 0 ||
			navigator.userAgent.indexOf("Android") > 0
		) {
			var is_mobile = true;
			$("body").addClass("mobile");
		}

		$.util.nav(is_mobile);
		$.util.scroll();
		$.util.pagetop();
		$.util.rollover();
		$.util.sp2x(is_mobile);
	});

	$.util = {
		nav: function (options) {
			$(nav_btn).click(function () {
				$(nav_btn).toggleClass("open");
				$(sp_nav).fadeToggle(500);
			});
			$("nav ul li a").click(function () {
				$(nav_btn).removeClass("open");
				if (options) {
					$(sp_nav).fadeToggle(500);
				}
			});
			$(window).resize(function () {
				$(sp_nav).attr("style", "");
			});
		},
		//ページ内リンクをスムーズにスクロール
		scroll: function (options) {
			$('a[href^="#"]').click(function () {
				var time = 500;
				var href = $(this).attr("href");
				var target = $(href == "#" ? "html" : href);
				var distance = target.offset().top;
				$("html, body").animate({
					scrollTop: distance
				}, time, "swing");
				return false;
			});
		},
		//トップに戻るボタンを実装
		pagetop: function () {
			var TopBtn = $('#PageTopBtn');
			var BottomPos = 60; // ボタンの画面下からの位置を指定
			TopBtn.hide();
			$(window).scroll(function (e) {
				$window = $(e.currentTarget);
				WindowHeight = $window.height(); // ウィンドウの高さ
				PageHeight = $(document).height(); // ページの高さ
				footerHeight = $(".footer").outerHeight() + 80; // フッタの高さ
				ScrollTop = $window.scrollTop(); // スクロールした量
				MoveTopBtn = WindowHeight + ScrollTop + footerHeight - PageHeight;

				//スクロール位置が100でボタンを表示
				if ($(this).scrollTop() > 100) {
					TopBtn.fadeIn();
				} else {
					TopBtn.fadeOut();
				}

				// フッターまでスクロールするとボタンを移動
				if (ScrollTop >= PageHeight - WindowHeight - footerHeight + BottomPos) {
					TopBtn.css({
						bottom: MoveTopBtn
					});
				} else {
					TopBtn.css({
						bottom: BottomPos
					});
				}
			});
			//ボタンを押下するとトップへ移動
			TopBtn.click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 300);
				return false;
			});
		},
		//モバイル時に2倍画像を使用
		// sp2x: function (is_mobile) {
		// 	if (is_mobile) {
		// 		$("img.2x").each(function () {
		// 			$(this).attr(
		// 				"srcset",
		// 				$(this)
		// 				.attr("src")
		// 				.replace(
		// 					new RegExp("(@2x)?(.gif|.jpg|.png)$"),
		// 					"@2x$2"
		// 				) + " 2x"
		// 			);
		// 		});
		// 	}
		// },
		//ロールオーバー
		rollover: function (options) {

			$(".fade").find("img").parent().each(function () {
				$(this).css("position", "relative");
				$(this).find("img").addClass("off");
				$(this).append($(this).find("img.off").clone(true).removeClass("off").addClass("on"));
				var onsrc = $(this).find("img.on").attr("src").replace(new RegExp('(_ov)?(\.gif|\.jpg|\.png)$'), "_ov$2");
				$(this).find("img.on").attr("src", onsrc);
			});

		}
	};
})(jQuery);
