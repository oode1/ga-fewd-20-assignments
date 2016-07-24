
"use strict";

var startup = function () {
  var body = $("body");
  var quotes = $("main#quotes");

  quotes.on("mouseover", function () {
    body.addClass("isenabled");
  });

  quotes.on("mouseout", function () {
    body.removeClass("isenabled");
  });

};

$(document).ready(startup);
