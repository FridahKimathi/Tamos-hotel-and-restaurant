 //Javascript affecting the all the landing pages left hand column.

$("#list").click(function() {
	 "use strict";
	event.preventDefault();
	var elements = document.getElementsByClassName("column");
	var i;
	var x = document.getElementById("left-hand");
	  for (i = 0; i < elements.length; i++) {
		elements[i].style.width = "100%";
	  }
	 if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }		   
});




