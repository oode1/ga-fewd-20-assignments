
"use strict";

var main = function () {

  $("a.backToTop").on("click", function () {
  	$("#pageTop")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#aboutLink").on("click", function () {
  	$("#aboutSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#portfolioLink").on("click", function () {
  	$("#portfolioSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#contactLink").on("click", function () {
  	$("#contactSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#otherLink").on("click", function () {
  	$("#otherSection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

};

$(document).ready(main);

