"use strict";

var startup = function () {
  $("form#mainform").on("submit", handleSubmit);
};

var handleSubmit = function () {
  var PurchasePrice = parseInt($("#PurchasePrice").val());
  var LoanAmount = parseInt($("#LoanAmount").val());
  var AnnualIntRate = parseFloat($("#AnnualIntRate").val());
  var LoanTerm = parseInt($("#LoanTerm").val());
  var AnnualPropertyTax = parseFloat($("#AnnualPropertyTax").val());
  var PMI = parseFloat($("#PMI").val());
  var HomeInsurance = parseFloat($("#HomeInsurance").val());
  var MonthlyHOD = parseFloat($("#MonthlyHOD").val());
  var answer = (
    LoanAmount *
    (
      AnnualIntRate *
      Math.pow(
        (1 + AnnualIntRate),
        (
          LoanTerm /
          Math.pow(
            (1 + AnnualIntRate),
            (LoanTerm - 1)
          )
        )
      )
    )
  );
  var TotalPayment = $("#TotalPayment");
  TotalPayment.val(answer);
  return false;
}

$(document).ready(startup);
