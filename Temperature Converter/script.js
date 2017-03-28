var a = 0;
var units = 1;
var farenheit = 32+9/5*a;


function inputTemp(){
	a = document.getElementById("input").value;
	console.log(a);
	return a;
	
}




(function output(){
	if(units ===1 && a!==0){
	document.getElementById("output-box").innerHTML = 32+9/5*a;
	document.getElementById("unit1").innerHTML = "C&deg";
	document.getElementById("unit2").innerHTML = "F&deg";
	} else if (units ===2 && a!==0) {
		document.getElementById("output-box").innerHTML = (5/9)*(a-32);
		document.getElementById("unit2").innerHTML = "C&deg";
		document.getElementById("unit1").innerHTML = "F&deg";
	} else if(units ===1 && a===0) {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "C&deg";
		document.getElementById("unit2").innerHTML = "F&deg";
	} else {
		document.getElementById("output-box").innerHTML = "";
		document.getElementById("unit1").innerHTML = "F&deg";
		document.getElementById("unit2").innerHTML = "C&deg"
	}
	
	
	var t = setTimeout(output, 1000);
})();

function swapUnits(){
	if(units === 1){
		units+=1;
	} else {
		units-=1;
	}
}