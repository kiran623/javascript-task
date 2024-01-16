function howManyMinutes(){
	var hours=document.getElementById("hours").value;
	var result=hours*60;
	document.getElementById("minutes").value = result;

}
function howManyHours(){
	var hours = document.getElementById("Hours").value;
	var result= hours*60 * 60;
	document.getElementById("second").value = result;
}

