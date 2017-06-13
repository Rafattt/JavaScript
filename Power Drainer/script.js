jQuery(document).ready(function($) {
	
	
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
	
	autoPowerIncrase2 = function(){
		
		
		powerAut2 = pow2++;
		n = autoPowerStatus2;
		
		var t = setTimeout(autoPowerIncrase2, (7500/n));
		return powerAut2;

	};
	
	autoPowerIncrase3 = function(){
		
		
		powerAut3 = pow3++;
		n = autoPowerStatus3;
		
		var t = setTimeout(autoPowerIncrase3, (5000/n));
		return powerAut3;

	};
	
	autoPowerIncrase4 = function(){
		
		
		powerAut4 = pow4++;
		n = autoPowerStatus4;
		
		var t = setTimeout(autoPowerIncrase4, (2500/n));
		return powerAut4;

	};
	
	autoPowerIncrase5 = function(){
		
		
		powerAut5 = pow5++;
		n = autoPowerStatus5;
		
		var t = setTimeout(autoPowerIncrase5, (1250/n));
		return powerAut5;

	};
	
	autoPowerIncrase6 = function(){
		
		
		powerAut6 = pow6++;
		n = autoPowerStatus6;
		
		var t = setTimeout(autoPowerIncrase6, (625/n));
		return powerAut6;

	};
	
	autoPowerIncrase7 = function(){
		
		
		powerAut7 = pow7++;
		n = autoPowerStatus7;
		
		var t = setTimeout(autoPowerIncrase7, (312/n));
		return powerAut7;

	};
	
	autoPowerIncrase8 = function(){
		
		
		powerAut8 = pow8++;
		n = autoPowerStatus8;
		
		var t = setTimeout(autoPowerIncrase8, (156/n));
		return powerAut8;

	};
	
	autoPowerIncrase9 = function(){
		
		
		powerAut9 = pow9++;
		n = autoPowerStatus9;
		
		var t = setTimeout(autoPowerIncrase9, (78/n));
		return powerAut9;

	};
	
	autoPowerIncrase10 = function(){
		
		
		powerAut10 = pow10++;
		n = autoPowerStatus10;
		
		var t = setTimeout(autoPowerIncrase10, (39/n));
		return powerAut10;

	};
	
	autoPowerIncrase13 = function(){
		
		
		powerAut13 = pow13++;
		n = autoPowerStatus13;
		
		var t = setTimeout(autoPowerIncrase13, (19/n));
		return powerAut13;

	};
	
	autoPowerIncrase13 = function(){
		
		
		powerAut13 = pow13++;
		n = autoPowerStatus13;
		
		var t = setTimeout(autoPowerIncrase13, (8/n));
		return powerAut13;

	};
	
	autoPowerIncrase13 = function(){
		
		
		powerAut13 = pow13++;
		n = autoPowerStatus13;
		
		var t = setTimeout(autoPowerIncrase13, (4/n));
		return powerAut13;

	};
	
	autoPowerIncrase14 = function(){
		
		
		powerAut14 = pow14++;
		n = autoPowerStatus14;
		
		var t = setTimeout(autoPowerIncrase14, (2/n));
		return powerAut14;

	};
	
	autoPowerIncrase15 = function(){
		
		
		powerAut15 = pow15++;
		n = autoPowerStatus15;
		
		var t = setTimeout(autoPowerIncrase15, (1/n));
		return powerAut15;

	};
	
	autoPowerIncrase16 = function(){
		
		
		powerAut16 = pow16++;
		n = autoPowerStatus16;
		
		var t = setTimeout(autoPowerIncrase16, (0.5/n));
		return powerAut16;

	};
	
	autoPowerIncrase17 = function(){
		
		
		powerAut17 = pow17++;
		n = autoPowerStatus17;
		
		var t = setTimeout(autoPowerIncrase17, (0.25/n));
		return powerAut17;

	};
	
	autoPowerIncrase18 = function(){
		
		
		powerAut18 = pow18++;
		n = autoPowerStatus18;
		
		var t = setTimeout(autoPowerIncrase18, (5000/n));
		return powerAut18;

	};
	
	autoPowerIncrase19 = function(){
		
		
		powerAut18 = pow19++;
		n = autoPowerStatus19;
		
		var t = setTimeout(autoPowerIncrase19, (5000/n));
		return powerAut19;

	};
	
	autoPowerIncrase20 = function(){
		
		
		powerAut20 = pow20++;
		n = autoPowerStatus20;
		
		var t = setTimeout(autoPowerIncrase20, (5000/n));
		return powerAut20;

	};
		
	
	//calculating total power from click and from auto incrasing
	(function totalPowerCalc(){
		powerLoseTotal = powerLose + powerLose2 + powerLose3 + powerLose4 + powerLose5 + powerLose6 + powerLose7 + powerLose8 + powerLose9 + powerLose10
		 + powerLose11 + powerLose12 + powerLose13 + powerLose14 + powerLose15 + powerLose16 + powerLose17 + powerLose18 + powerLose19 + powerLose20;
		powerAutTotal = powerAut + powerAut2 + powerAut3 + powerAut4 + powerAut5 + powerAut6 + powerAut7 + powerAut8
		+ powerAut9 + powerAut10 + powerAut11 + powerAut12 + powerAut13 + powerAut14 + powerAut15 + powerAut16 + powerAut17
		 + powerAut18 + powerAut19 + powerAut20;
		totalPower = (power + powerAutTotal)- (powerLoseTotal+powerBonusLose);
		console.log(totalPower);
			//disabling and enabling auto power button and button text, depend on required power and current power level
			if(totalPower<=requiredPower-1){
				document.getElementById("autoPower").disabled = true;
				$("#autoPower").prop('value', 'Auto Power Lvl '+autoPowerStatus);
			} else if(totalPower>=requiredPower){
				document.getElementById("autoPower").disabled = false;
				$("#autoPower").prop('value', 'Auto Power Lvl ' +autoPowerStatus);
			} 
			
			if(totalPower<=requiredPower2-1){
				document.getElementById("autoPower2").disabled = true;
				$("#autoPower2").prop('value', 'Auto Power2 Lvl '+autoPowerStatus2);
			} else if(totalPower>=requiredPower2){
				document.getElementById("autoPower2").disabled = false;
				$("#autoPower2").prop('value', 'Auto Power2 Lvl ' +autoPowerStatus2);
			} 
			
			if(totalPower<=requiredPower3-1){
				document.getElementById("autoPower3").disabled = true;
				$("#autoPower3").prop('value', 'Auto Power3 Lvl '+autoPowerStatus3);
			} else if(totalPower>=requiredPower3){
				document.getElementById("autoPower3").disabled = false;
				$("#autoPower3").prop('value', 'Auto Power3 Lvl ' +autoPowerStatus3);
			} 
			
			if(totalPower<=requiredPower4-1){
				document.getElementById("autoPower4").disabled = true;
				$("#autoPower4").prop('value', 'Auto Power4 Lvl '+autoPowerStatus4);
			} else if(totalPower>=requiredPower4){
				document.getElementById("autoPower4").disabled = false;
				$("#autoPower4").prop('value', 'Auto Power4 Lvl ' +autoPowerStatus4);
			} 
			
			if(totalPower<=requiredPower5-1){
				document.getElementById("autoPower5").disabled = true;
				$("#autoPower5").prop('value', 'Auto Power5 Lvl '+autoPowerStatus5);
			} else if(totalPower>=requiredPower5){
				document.getElementById("autoPower5").disabled = false;
				$("#autoPower5").prop('value', 'Auto Power5 Lvl ' +autoPowerStatus5);
			} 
			
			if(totalPower<=requiredPower6-1){
				document.getElementById("autoPower6").disabled = true;
				$("#autoPower6").prop('value', 'Auto Power6 Lvl '+autoPowerStatus6);
			} else if(totalPower>=requiredPower6){
				document.getElementById("autoPower6").disabled = false;
				$("#autoPower6").prop('value', 'Auto Power6 Lvl ' +autoPowerStatus6);
			} 
			
			if(totalPower<=requiredPower7-1){
				document.getElementById("autoPower7").disabled = true;
				$("#autoPower7").prop('value', 'Auto Power7 Lvl '+autoPowerStatus7);
			} else if(totalPower>=requiredPower7){
				document.getElementById("autoPower7").disabled = false;
				$("#autoPower7").prop('value', 'Auto Power7 Lvl ' +autoPowerStatus7);
			} 
			
			if(totalPower<=requiredPower8-1){
				document.getElementById("autoPower8").disabled = true;
				$("#autoPower8").prop('value', 'Auto Power8 Lvl '+autoPowerStatus8);
			} else if(totalPower>=requiredPower8){
				document.getElementById("autoPower8").disabled = false;
				$("#autoPower8").prop('value', 'Auto Power8 Lvl ' +autoPowerStatus8);
			} 
			
			if(totalPower<=requiredPower9-1){
				document.getElementById("autoPower9").disabled = true;
				$("#autoPower9").prop('value', 'Auto Power9 Lvl '+autoPowerStatus9);
			} else if(totalPower>=requiredPower9){
				document.getElementById("autoPower9").disabled = false;
				$("#autoPower9").prop('value', 'Auto Power9 Lvl ' +autoPowerStatus9);
			} 
			
			if(totalPower<=requiredPower10-1){
				document.getElementById("autoPower10").disabled = true;
				$("#autoPower10").prop('value', 'Auto Power10 Lvl '+autoPowerStatus10);
			} else if(totalPower>=requiredPower10){
				document.getElementById("autoPower10").disabled = false;
				$("#autoPower10").prop('value', 'Auto Power10 Lvl ' +autoPowerStatus10);
			} 
			
			if(totalPower<=requiredPower11-1){
				document.getElementById("autoPower11").disabled = true;
				$("#autoPower11").prop('value', 'Auto Power11 Lvl '+autoPowerStatus11);
			} else if(totalPower>=requiredPower11){
				document.getElementById("autoPower11").disabled = false;
				$("#autoPower11").prop('value', 'Auto Power11 Lvl ' +autoPowerStatus11);
			} 
			
			if(totalPower<=requiredPower12-1){
				document.getElementById("autoPower12").disabled = true;
				$("#autoPower12").prop('value', 'Auto Power12 Lvl '+autoPowerStatus12);
			} else if(totalPower>=requiredPower12){
				document.getElementById("autoPower12").disabled = false;
				$("#autoPower12").prop('value', 'Auto Power12 Lvl ' +autoPowerStatus12);
			} 
			
			if(totalPower<=requiredPower13-1){
				document.getElementById("autoPower13").disabled = true;
				$("#autoPower13").prop('value', 'Auto Power13 Lvl '+autoPowerStatus13);
			} else if(totalPower>=requiredPower13){
				document.getElementById("autoPower13").disabled = false;
				$("#autoPower13").prop('value', 'Auto Power13 Lvl ' +autoPowerStatus13);
			} 
			
			if(totalPower<=requiredPower14-1){
				document.getElementById("autoPower14").disabled = true;
				$("#autoPower14").prop('value', 'Auto Power14 Lvl '+autoPowerStatus14);
			} else if(totalPower>=requiredPower14){
				document.getElementById("autoPower14").disabled = false;
				$("#autoPower14").prop('value', 'Auto Power14 Lvl ' +autoPowerStatus14);
			} 
			
			if(totalPower<=requiredPower15-1){
				document.getElementById("autoPower15").disabled = true;
				$("#autoPower15").prop('value', 'Auto Power15 Lvl '+autoPowerStatus15);
			} else if(totalPower>=requiredPower15){
				document.getElementById("autoPower15").disabled = false;
				$("#autoPower15").prop('value', 'Auto Power15 Lvl ' +autoPowerStatus15);
			} 
			
			if(totalPower<=requiredPower16-1){
				document.getElementById("autoPower16").disabled = true;
				$("#autoPower16").prop('value', 'Auto Power16 Lvl '+autoPowerStatus16);
			} else if(totalPower>=requiredPower16){
				document.getElementById("autoPower16").disabled = false;
				$("#autoPower16").prop('value', 'Auto Power16 Lvl ' +autoPowerStatus16);
			} 
			
			if(totalPower<=requiredPower17-1){
				document.getElementById("autoPower17").disabled = true;
				$("#autoPower17").prop('value', 'Auto Power17 Lvl '+autoPowerStatus17);
			} else if(totalPower>=requiredPower17){
				document.getElementById("autoPower17").disabled = false;
				$("#autoPower17").prop('value', 'Auto Power17 Lvl ' +autoPowerStatus17);
			} 
			
			if(totalPower<=requiredPower18-1){
				document.getElementById("autoPower18").disabled = true;
				$("#autoPower18").prop('value', 'Auto Power18 Lvl '+autoPowerStatus18);
			} else if(totalPower>=requiredPower18){
				document.getElementById("autoPower18").disabled = false;
				$("#autoPower18").prop('value', 'Auto Power18 Lvl ' +autoPowerStatus18);
			} 
			
			if(totalPower<=requiredPower19-1){
				document.getElementById("autoPower19").disabled = true;
				$("#autoPower19").prop('value', 'Auto Power19 Lvl '+autoPowerStatus19);
			} else if(totalPower>=requiredPower19){
				document.getElementById("autoPower19").disabled = false;
				$("#autoPower19").prop('value', 'Auto Power19 Lvl ' +autoPowerStatus19);
			} 
			
			if(totalPower<=requiredPower20-1){
				document.getElementById("autoPower20").disabled = true;
				$("#autoPower20").prop('value', 'Auto Power20 Lvl '+autoPowerStatus20);
			} else if(totalPower>=requiredPower20){
				document.getElementById("autoPower20").disabled = false;
				$("#autoPower20").prop('value', 'Auto Power20 Lvl ' +autoPowerStatus20);
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
