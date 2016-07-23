
"use strict";

var main = function () {
	var x = $("p#Box1");
x.on("click", function () {
	var y = $("p#Box2");
	y.css("background-color", "red");
});


// We need to add this so that the `main` function
// will execute once the document is ready.
$(document).ready(main);

