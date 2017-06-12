var powerIncrase;
var autoPowerIncrase;
var autoPowerClick;


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
	var requiredBonusPower = 500;
	var bonus = 1;
	var bonusLvl = 0;
	var powerLose = 0;
	var powerBonusLose = 0;
	
	
	console.log(startTime);
	
	powerIncrase = function (){
		power += 1*bonus;
		return power;

	}
	
	clickPowerLevel = function(){
		bonus = bonus*2;
		bonusLvl++;
		
			
			requiredBonusPower = requiredBonusPower*bonus;
			powerBonusLose = requiredBonusPower;
			power = power - requiredBonusPower;
			console.log("PowerBonusLose:" +powerBonusLose)
		$("#reqPowerBonus").text("Cost: "+(requiredBonusPower) +" Power");
	}
	
	
	// Auto incrasing power every secound, power production doubles each level
	autoPowerIncrase = function(){
		

		powerAut = (pow++)*autoPowerStatus;
		
		
		var t = setTimeout(autoPowerIncrase, 1000);
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
			requiredPower = requiredPower*2;
			powerLose = requiredPower;
			console.log("PowerLose:" +powerLose)
		}
		$("#reqPower").text("Cost: "+requiredPower+ " Power");
	};
	
	autoPowerLose = function(){
		
	}
	
	//calculating total power from click and from auto incrasing
	(function totalPowerCalc(){
		
		totalPower = (power + powerAut)-powerLose;
		console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxlose:"+powerLose);
		console.log("power: "+power);
		console.log("powerAut: "+powerAut)
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
				$("#autoPower").prop('value', 'Click Power Lvl ' +(bonusLvl));
			} 
			console.log("Bonus: " +bonus);
			console.log("Power: " +power);				
		var t = setTimeout(totalPowerCalc, 1000);
		console.log("Power status:"+autoPowerStatus);
	})();
	
	
	
});