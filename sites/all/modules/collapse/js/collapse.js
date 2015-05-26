function collapse_comment(id) {
	trig = "#collapse-comment-trigger-" + id;
	wrap = "#comment-wrapper-" + id;
	if (jQuery(trig).text() == "[-]") {
		jQuery(trig).text("[+]");
		jQuery(wrap + " .collapse-comment-trigger").text("[+]");
		jQuery(wrap + " .comment-wrapper").hide();
		jQuery(wrap + " .comment .attribution").siblings().hide();
		
		//AJAX Comments Wrappers
		jQuery(wrap + " .ajax-comment-wrapper").hide();
	} else {
		jQuery(trig).text("[-]");
		jQuery(wrap + " .collapse-comment-trigger").text("[-]");
		jQuery(wrap + " .comment-wrapper").show();
		jQuery(wrap + " .comment .attribution").siblings().show();
		
		//AJAX Comments Wrappers
		jQuery(wrap + " .ajax-comment-wrapper").show();
	}
}