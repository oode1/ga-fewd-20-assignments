
"use strict";

function main () {
  var val1 = window.prompt("Please enter your first value");
  var val2 = window.prompt("Now enter a second value");
  var finalVal = parseInt(val1) + parseInt(val2);
  window.alert("Your Final Value Is " + finalVal);
}


window.addEventListener("load", main);
