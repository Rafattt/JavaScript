var powerIncrase;
var autoPowerIncrase;


jQuery(document).ready(function($) {
	var power = 0;
	var powerAut = 0;
	var date = new Date();
	var startTime = date.getTime();
	var totalPower = 0;
	var pow = 1;
	var autoPowerStatus = 0;
	var temp;
	
	
	console.log(startTime);
	
	powerIncrase = function (){
		power += 1;
		return power;

		

	}
	
	autoPowerIncrase = function(){
		autoPowerStatus = 1;
		temp = 50;
		powerAut = startTime - (startTime - pow);
		if(autoPowerStatus === 1){
				powerAut = powerAut - temp;
				autoPowerStatus = 2;
			}
		pow++;
		var t = setTimeout(autoPowerIncrase, 1000);
		return powerAut;

	};
	
	(function totalPowerCalc(){
		
		totalPower = power + powerAut;
		console.log("power: "+power);
		console.log("powerAut: "+powerAut)
		console.log(totalPower);
			if(totalPower<=49){
				document.getElementById("autoPower").disabled = true;
			} else if(totalPower>=50 && autoPowerStatus !== 2){
				document.getElementById("autoPower").disabled = false;
			} else if(totalPower>=50 && autoPowerStatus === 2){
				document.getElementById("autoPower").disabled = false;
				$("#autoPower").prop('value', 'Auto Power Lvl 2');
				
			} 
			
		var t = setTimeout(totalPowerCalc, 1000);
		console.log("Power status:"+autoPowerStatus);
	})();
	
	
	
});