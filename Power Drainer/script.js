var powerIncrase;
var autoPowerIncrase;
var autoPowerClick;
var autoPowerLose;


jQuery(document).ready(function($) {
	var power = 0;
	var powerAut = 0;
	var date = new Date();
	var startTime = date.getTime();
	var totalPower = 0;
	var pow = 1;
	var autoPowerStatus = 0;
	var clickPowerStatus = 0;
	var temp;
	var requiredPower = 50;
	var requiredBonusPower = 10;
	var bonus = 1;
	var bonusLvl = 0;
	var powerLose =0;
	var powerBonusLose = 0;
	
	
	console.log(startTime);
	
	powerIncrase = function (){
		power += 1*bonus;
		return power;

	}
	
	clickPowerLevel = function(){
		
		    bonus = bonus*2;
		    bonusLvl++;
			
			oldPowerBonusLose = powerBonusLose;
			requiredBonusPower = requiredBonusPower*2;

				powerBonusLose = requiredBonusPower/2 + powerBonusLose;
			
				
			
			
			
			
			console.log("PowerBonusLose:" +powerBonusLose)
		$("#reqPowerBonus").text("Cost: "+(requiredBonusPower) +" Power");
	}
	
	
	// Auto incrasing power every secound, power production doubles each level
	autoPowerIncrase = function(){
		
		
		powerAut = pow++;
		n = autoPowerStatus;
		
		var t = setTimeout(autoPowerIncrase, (10000/n));
		return powerAut;

	};
	
	
	
	//Enabling auto incrasing power, cost incrasing 2x each click
	autoPowerClick = function(){
		autoPowerStatus++;
		
		
		if (requiredPower === 50){
			powerLose = requiredPower;
			requiredPower = requiredPower*(autoPowerStatus+1);
			console.log("PowerLose:" +powerLose)
		} else {
			requiredPowerOld = requiredPower/2;
			requiredPower = requiredPower*2;
			powerLose = requiredPowerOld+(requiredPower/2);
			console.log("requiredPowerOld:" +requiredPowerOld)
			console.log("requiredPower:" +requiredPower)
		}
		$("#reqPower").text("Cost: "+requiredPower+ " Power");
		return requiredPower;
	};
	
	
	
	//calculating total power from click and from auto incrasing
	(function totalPowerCalc(){
		
		totalPower = (power + powerAut)- (powerLose+powerBonusLose);
		console.log(totalPower);
			//disabling and enabling auto power button and button text, depend on required power and current power level
			if(totalPower<=requiredPower-1){
				document.getElementById("autoPower").disabled = true;
				$("#autoPower").prop('value', 'Auto Power Lvl '+autoPowerStatus);
			} else if(totalPower>=requiredPower){
				document.getElementById("autoPower").disabled = false;
				$("#autoPower").prop('value', 'Auto Power Lvl ' +autoPowerStatus);
			} 
			
			if(totalPower<=requiredBonusPower-1){
				document.getElementById("clickPower").disabled = true;
				$("#clickPower").prop('value', 'Click Power Lvl '+(bonusLvl));
			} else if(totalPower>=requiredBonusPower){
				document.getElementById("clickPower").disabled = false;
				$("#clickPower").prop('value', 'Click Power Lvl ' +(bonusLvl));
			} 
				
		var t = setTimeout(totalPowerCalc, 1000);
		console.log("Power status:"+autoPowerStatus);
	})();
	
	
	
});