// BUSINESS LOGIC

// USER INTERFACE LOGIC
$(document).ready(function() {
	"use strict";
  $("#start-btn").click(function() {
	  
    event.preventDefault();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
   
    if(userFirstName.length === 0 || userSecondName.length === 0 ) {
      $("#no-name").show();
      $("#firstName").addClass("enter-name");
      $("#secondName").addClass("enter-name");
    }else {
      $("#intro").hide();
      $("#form1").show();
    }
  });
  $("#next").click(function() {
    $("#form1").hide();
    $("#form2").show();
  });
  $("#submit").click(function() {
    event.preventDefault();
    $("#final").show();
    $("#form2").hide();
  });
  $("#retake").click(function() {
    event.preventDefault();
    location.reload();
  });
});