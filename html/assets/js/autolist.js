/**
 * Plugin function to insert spans into text: usage $(document).ready(function() {
 * $('p.charcount').charSpanCount(); }); or $(document).ready(function() {
 * $('p.charcount').charSpanCount({'charcount' : 15}); });
 */
(function($) {
	$.fn.autoList = function(options) {

		var settings = $.extend({
			// how many character before inserting span
			'listItems' : 3
		}, options);

		var items = settings.listItems;
		var fixList = function(data) {
		var narrow = $(window).width() < 400;

			var len = $(data).children().length;
			var status = 'close';
			if (len > items) {
				if(narrow){
					$(data).children().hide();
					status = 'open';
					//any divs with this class will also get hidden
					//	$('.condense').hide();
				}
				
				$(data).before('<div class="mb"><a href="#" class="close font13">Click to '+status +'  this section</a></div>');
				

				$(data).prev("div").children("a.close").click(
						function(e) {
							var $target = $(e.target);

							$(data).children().toggle("fast");
							if ($(this).hasClass("open")) {
								$(this).removeClass("open").addClass("close")
										.text('Click to close  this section');
							} else {
								$(this).removeClass("close").addClass("open")
										.text('Click to open this section');

							}
							e.preventDefault();
							
						});

			};
		};

		return this.each(function() {
			fixList($(this));
		});

	};
})(jQuery);
