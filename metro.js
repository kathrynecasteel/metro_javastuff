var day;
var week;
var average;


function metroCalc(){
	day = document.getElementById("day").value;
	week = document.getElementById("week").value;
	average = day * week * 4;
	alert( "You ride " +
		 average + 
		" times a month!");
	metroMonth();
}

function metroMonth(){
	if (average >38 ) {
		alert("You need a monthly card!");
	} else {
		alert("You don't need a montly card!")
	}
	
}