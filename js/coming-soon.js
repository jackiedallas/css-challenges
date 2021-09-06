// Creating countdown, Set the date to countdown to..
var countDownDate = new Date("Feb 9, 2022 15:37:25").getTime();

// Update the count ever second..
var x = setInterval(function () {
	
	// Get Today's date and time
	var now = new Date().getTime();
	
	//	Get the distance between now and the countdown date..
	var distance = countDownDate - now;
	
	//	Time calculations for days, hours, minutes, and seconds...
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// Display Result in the element
	document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
	
	// If countdown is finished you graduated
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "You Graduated!";
	}
}, 1000);