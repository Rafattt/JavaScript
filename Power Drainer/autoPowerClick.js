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
	
	autoPowerClick2 = function(){
		autoPowerStatus2++;
		
		
		if (requiredPower2 === 500){
			powerLose2 = requiredPower2;
			requiredPower2 = requiredPower2*(autoPowerStatus2+1);
		
		} else {
			requiredPowerOld2 = requiredPower2/2;
			requiredPower2 = requiredPower2*2;
			powerLose2 = requiredPowerOld2+(requiredPower2/2);
		}
		$("#reqPower").text("Cost: "+requiredPower2+ " Power");
		return requiredPower2;
	};
	
	
	autoPowerClick3 = function(){
		autoPowerStatus3++;
		
		
		if (requiredPower3 === 5000){
			powerLose3 = requiredPower3;
			requiredPower3 = requiredPower3*(autoPowerStatus3+1);
		
		} else {
			requiredPowerOld3 = requiredPower3/2;
			requiredPower3 = requiredPower3*2;
			powerLose3 = requiredPowerOld3+(requiredPower3/2);
		}
		$("#reqPower").text("Cost: "+requiredPower3+ " Power");
		return requiredPower3;
	};
	
	
	autoPowerClick4 = function(){
		autoPowerStatus4++;
		
		
		if (requiredPower4 === 10000){
			powerLose4 = requiredPower4;
			requiredPower4 = requiredPower4*(autoPowerStatus4+1);
		
		} else {
			requiredPowerOld4 = requiredPower4/2;
			requiredPower4 = requiredPower4*2;
			powerLose4 = requiredPowerOld4+(requiredPower4/2);
		}
		$("#reqPower").text("Cost: "+requiredPower4+ " Power");
		return requiredPower4;
	};
	
	autoPowerClick5 = function(){
		autoPowerStatus5++;
		
		
		if (requiredPower5 === 20000){
			powerLose5 = requiredPower5;
			requiredPower5 = requiredPower5*(autoPowerStatus5+1);
		
		} else {
			requiredPowerOld5 = requiredPower5/2;
			requiredPower5 = requiredPower5*2;
			powerLose5 = requiredPowerOld5+(requiredPower5/2);
		}
		$("#reqPower").text("Cost: "+requiredPower5+ " Power");
		return requiredPower5;
	};
	
	autoPowerClick6 = function(){
		autoPowerStatus6++;
		
		
		if (requiredPower6 === 40000){
			powerLose6 = requiredPower6;
			requiredPower6 = requiredPower6*(autoPowerStatus6+1);
		
		} else {
			requiredPowerOld6 = requiredPower6/2;
			requiredPower6 = requiredPower6*2;
			powerLose6 = requiredPowerOld6+(requiredPower6/2);
		}
		$("#reqPower").text("Cost: "+requiredPower6+ " Power");
		return requiredPower6;
	};
	
	autoPowerClick7 = function(){
		autoPowerStatus7++;
		
		
		if (requiredPower7 === 80000){
			powerLose7 = requiredPower7;
			requiredPower7 = requiredPower7*(autoPowerStatus7+1);
		
		} else {
			requiredPowerOld7 = requiredPower7/2;
			requiredPower7 = requiredPower7*2;
			powerLose7 = requiredPowerOld7+(requiredPower7/2);
		}
		$("#reqPower").text("Cost: "+requiredPower7+ " Power");
		return requiredPower7;
	};
	
	autoPowerClick8 = function(){
		autoPowerStatus8++;
		
		
		if (requiredPower8 === 160000){
			powerLose8 = requiredPower8;
			requiredPower8 = requiredPower8*(autoPowerStatus8+1);
		
		} else {
			requiredPowerOld8 = requiredPower8/2;
			requiredPower8 = requiredPower8*2;
			powerLose8 = requiredPowerOld8+(requiredPower8/2);
		}
		$("#reqPower").text("Cost: "+requiredPower8+ " Power");
		return requiredPower8;
	};
	
	autoPowerClick9 = function(){
		autoPowerStatus9++;
		
		
		if (requiredPower9 === 320000){
			powerLose9 = requiredPower9;
			requiredPower9 = requiredPower9*(autoPowerStatus9+1);
		
		} else {
			requiredPowerOld9 = requiredPower9/2;
			requiredPower9 = requiredPower9*2;
			powerLose9 = requiredPowerOld9+(requiredPower9/2);
		}
		$("#reqPower").text("Cost: "+requiredPower9+ " Power");
		return requiredPower9;
	};
	
	autoPowerClick10 = function(){
		autoPowerStatus10++;
		
		
		if (requiredPower10 === 640000){
			powerLose10 = requiredPower10;
			requiredPower10 = requiredPower10*(autoPowerStatus10+1);
		
		} else {
			requiredPowerOld10 = requiredPower10/2;
			requiredPower10 = requiredPower10*2;
			powerLose10 = requiredPowerOld10+(requiredPower10/2);
		}
		$("#reqPower").text("Cost: "+requiredPower10+ " Power");
		return requiredPower10;
	};
	
	autoPowerClick11 = function(){
		autoPowerStatus11++;
		
		
		if (requiredPower11 === 1280000){
			powerLose11 = requiredPower11;
			requiredPower11 = requiredPower11*(autoPowerStatus11+1);
		
		} else {
			requiredPowerOld11 = requiredPower11/2;
			requiredPower11 = requiredPower11*2;
			powerLose11 = requiredPowerOld11+(requiredPower11/2);
		}
		$("#reqPower").text("Cost: "+requiredPower11+ " Power");
		return requiredPower11;
	};
	
	autoPowerClick12 = function(){
		autoPowerStatus12++;
		
		
		if (requiredPower12 === 2560000){
			powerLose12 = requiredPower12;
			requiredPower12 = requiredPower12*(autoPowerStatus12+1);
		
		} else {
			requiredPowerOld12 = requiredPower12/2;
			requiredPower12 = requiredPower12*2;
			powerLose12 = requiredPowerOld12+(requiredPower12/2);
		}
		$("#reqPower").text("Cost: "+requiredPower12+ " Power");
		return requiredPower12;
	};
	
	autoPowerClick13 = function(){
		autoPowerStatus13++;
		
		
		if (requiredPower13 === 5120000){
			powerLose13 = requiredPower13;
			requiredPower13 = requiredPower13*(autoPowerStatus13+1);
		
		} else {
			requiredPowerOld13 = requiredPower13/2;
			requiredPower13 = requiredPower13*2;
			powerLose13 = requiredPowerOld13+(requiredPower13/2);
		}
		$("#reqPower").text("Cost: "+requiredPower13+ " Power");
		return requiredPower13;
	};
	
	autoPowerClick14 = function(){
		autoPowerStatus14++;
		
		
		if (requiredPower14 === 10240000){
			powerLose14 = requiredPower14;
			requiredPower14 = requiredPower14*(autoPowerStatus14+1);
		
		} else {
			requiredPowerOld14 = requiredPower14/2;
			requiredPower14 = requiredPower14*2;
			powerLose14 = requiredPowerOld14+(requiredPower14/2);
		}
		$("#reqPower").text("Cost: "+requiredPower14+ " Power");
		return requiredPower14;
	};
	
	autoPowerClick15 = function(){
		autoPowerStatus15++;
		
		
		if (requiredPower15 === 20480000){
			powerLose15 = requiredPower15;
			requiredPower15 = requiredPower15*(autoPowerStatus15+1);
		
		} else {
			requiredPowerOld15 = requiredPower15/2;
			requiredPower15 = requiredPower15*2;
			powerLose15 = requiredPowerOld15+(requiredPower15/2);
		}
		$("#reqPower").text("Cost: "+requiredPower15+ " Power");
		return requiredPower15;
	};
	
	autoPowerClick16 = function(){
		autoPowerStatus16++;
		
		
		if (requiredPower16 === 40960000){
			powerLose16 = requiredPower16;
			requiredPower16 = requiredPower16*(autoPowerStatus16+1);
		
		} else {
			requiredPowerOld16 = requiredPower16/2;
			requiredPower16 = requiredPower16*2;
			powerLose16 = requiredPowerOld16+(requiredPower16/2);
		}
		$("#reqPower").text("Cost: "+requiredPower16+ " Power");
		return requiredPower16;
	};
	
	autoPowerClick17 = function(){
		autoPowerStatus17++;
		
		
		if (requiredPower17 === 81920000){
			powerLose17 = requiredPower17;
			requiredPower17 = requiredPower17*(autoPowerStatus17+1);
		
		} else {
			requiredPowerOld17 = requiredPower17/2;
			requiredPower17 = requiredPower17*2;
			powerLose17 = requiredPowerOld17+(requiredPower17/2);
		}
		$("#reqPower").text("Cost: "+requiredPower17+ " Power");
		return requiredPower17;
	};
	
	autoPowerClick18 = function(){
		autoPowerStatus18++;
		
		
		if (requiredPower18 === 163840000){
			powerLose18 = requiredPower18;
			requiredPower18 = requiredPower18*(autoPowerStatus18+1);
		
		} else {
			requiredPowerOld18 = requiredPower18/2;
			requiredPower18 = requiredPower18*2;
			powerLose18 = requiredPowerOld18+(requiredPower18/2);
		}
		$("#reqPower").text("Cost: "+requiredPower18+ " Power");
		return requiredPower18;
	};
	
	autoPowerClick19 = function(){
		autoPowerStatus19++;
		
		
		if (requiredPower19 === 327680000){
			powerLose19 = requiredPower19;
			requiredPower19 = requiredPower19*(autoPowerStatus19+1);
		
		} else {
			requiredPowerOld19 = requiredPower19/2;
			requiredPower19 = requiredPower19*2;
			powerLose19 = requiredPowerOld19+(requiredPower19/2);
		}
		$("#reqPower").text("Cost: "+requiredPower19+ " Power");
		return requiredPower19;
	};
	
	autoPowerClick20 = function(){
		autoPowerStatus20++;
		
		
		if (requiredPower20 === 655360000){
			powerLose20 = requiredPower20;
			requiredPower20 = requiredPower20*(autoPowerStatus20+1);
		
		} else {
			requiredPowerOld20 = requiredPower20/2;
			requiredPower20 = requiredPower20*2;
			powerLose20 = requiredPowerOld20+(requiredPower20/2);
		}
		$("#reqPower").text("Cost: "+requiredPower20+ " Power");
		return requiredPower20;
	};