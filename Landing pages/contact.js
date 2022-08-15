  //Javascript affecting the contact us landing page
$("#contactsubmit-btn").click(function() {
	  "use strict";
    event.preventDefault();
    var userEmail = $("#clientemail").val();
    var userSubject= $("#subject").val();
   
    if(userEmail.length === 0 || userSubject.length === 0) {
		$("#no-details").show();
      $("#clientemail").addClass("mandatory");
      $("#subject").addClass("mandatory");
    }else {
      $("#contactus").hide();
	  $("#form2").show();
	   }
	
});
  
  
