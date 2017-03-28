var cost = 0;
var frame = 0;
var adder1 = 0;
var adder2 = 0;
var multiplier = 1;
var rUp = 0;
var fPrice = 0;

function roundUp(num) {
	
		
		

	
	
	return Math.ceil(num * 100) / 100
}

function getCost(cost){
	var cost = document.getElementById("cost-input").value;
	var t = setTimeout(getCost, 1000);
return cost;

}



function getFrame(frame){
	var frame = document.getElementById("frame-input").value;
	var t = setTimeout(getFrame, 1000);
return frame;

}


function getAdder1(adder1){
	var adder1 = document.getElementById("adder1-input").value;
	var t = setTimeout(getAdder1, 1000);
return adder1;

}

function getAdder2(adder2){
	var adder2 = document.getElementById("adder2-input").value;
	var t = setTimeout(getAdder2, 1000);
return adder2;

}

function getMultiplier(multiplier){
	var multiplier = document.getElementById("multiplier-input").value;
	var t = setTimeout(getMultiplier, 1000);
	if(multiplier == 0){
		multiplier = 1;
	} else {
		
	}
return multiplier;

}

var tempPrice = (+getFrame()+ +getCost()+ +getAdder1()+ +getAdder2())* +getMultiplier();
var finalPrice = roundUp(tempPrice);

function price(fPrice){

	document.getElementById("price").innerHTML =roundUp((+getFrame()+ +getCost()+ +getAdder1()+ +getAdder2())* +getMultiplier());
	var fPrice = roundUp((+getFrame()+ +getCost()+ +getAdder1()+ +getAdder2())* +getMultiplier());
	
	
	return fPrice;
}



(function formula(){
	
	if(+getCost() == 0){
		formulaText = "";
	}  else if (+getFrame()=== 0) {
		formulaText = +getCost() + "=" + (+getCost()+ +getFrame()) + "(x" + getMultiplier() + ")" +  +price();
	} else if (+getAdder1() ==0 && +getAdder2() ==0){	
		formulaText = +getCost() +"+"+ getFrame() + "=" + (+getCost()+ +getFrame()) + "(x" + getMultiplier() + ")" +  +price();
	} else if(+getAdder1() !== 0 && +getAdder2() !== 0) {
		formulaText = +getCost() +"+"+ getFrame() + "+" +getAdder1() + "+" + +getAdder2() + "=" + (+getCost()+ +getFrame()) + "(x" + getMultiplier() + ")" +  +price();
	} else if(+getAdder1() !== 0 && +getAdder2() == 0){
		formulaText = +getCost() +"+"+ +getFrame() + "+" + +getAdder1() + "=" + (+getCost()+ +getFrame()+ +getAdder1()) + "(x" + +getMultiplier() + ")" +  +price();
	} else if(+getAdder1() == 0 && +getAdder2() !== 0){
		formulaText = +getCost() +"+"+ +getFrame() + "+" + +getAdder2() + "=" + (+getCost()+ +getFrame() + +getAdder2()) + "(x" + +getMultiplier() + ")" +  +price();
	}

	
	document.getElementById("formula").innerHTML = formulaText;
	var t = setTimeout(formula, 1000);
	
})();









