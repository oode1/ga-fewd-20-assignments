
"use strict";

var start = function () {
	var question = $("#question");
	var answer = $("#answer");

	question.on("click", function () {
		answer.fadeIn(4000, function () {
		  question.addClass("coolblue");
	    });
    });

	answer.on("click", function () {
		answer.slideUp(2000, function () {
		answer.addClass("coolred");
	     });
	});
};

// Call the "main" function when do
$(document).ready(start);
