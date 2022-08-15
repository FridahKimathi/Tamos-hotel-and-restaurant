// Javascript affecting the gallery landpage
var slideIndex = 0;
showSlides();     
function showSlides() {
	   "use strict";
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  slideIndex++;
	  if(slideIndex > slides.length) {
		slideIndex = 1;
	  }
	  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
		  }
	  slides[slideIndex - 1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	  setTimeout(showSlides, 20000);  // Change image every 20 seconds
}


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
