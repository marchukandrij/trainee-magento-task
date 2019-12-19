define([
	'jquery'
], function ($) {
	'use strict';
 
	$(function () { // to ensure that code evaluates on page load
		$('#my_story button').click( function() {
			var span = $('#my_story span').toggle();
			var btn  = $('#my_story button');
			if (btn.text() == ' Показати всю історію ') {
				btn.text(' Сховати її назад ');
			} else {
				btn.text(' Показати всю історію ');
			}
		});
    });
 
});
