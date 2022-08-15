//Javascript affecting the reservation landing page	
$("#submit-btn").click(function() {
	  "use strict";
	  event.preventDefault();
	  var userFirstName = $("#first-name").val();
	  var userPhoneNumber= $("#phone-number").val();
	  if(userFirstName.length === 0 || userPhoneNumber.length === 0) {
		  	
			$("#no-details").show();
			$("#firstName").addClass("mandatory");
			$("#phone-number").addClass("mandatory");
			}else {
			$("#intro").hide();
			$("#form1").show();
		  }
  });
  
