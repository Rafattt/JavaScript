function showSizeinFeets(){
    let netFeet = roughOpeningSize;
	netFeet = parseFloat(netFeet)-2;
	netFeet = netFeet/12;
	let fracFeet = new Fraction(netFeet);	
		fracFeet = fracFeet.toFraction(true);
		fracFeet = fracFeet.replace(" ", "-");
		
		//spliting to feet and inches
		let splitedNumber = fracFeet.split("-");
		splitedNumberInch = splitedNumber[1].split("/");
		splitedNumberInch[0] = parseFloat(splitedNumberInch[0]);
		splitedNumberInch[1] = parseFloat(splitedNumberInch[1])/12;

		console.log("splited "+splitedNumberInch);
		function calculateInches(firstPart, secondPart){
			if(firstPart>=secondPart){
				wholeInch = firstPart / secondPart;
				
				
			}
			let fracwholeInch = new Fraction(wholeInch);
				fracwholeInch = fracwholeInch.toFraction(true);
				fracwholeInch = fracwholeInch.replace(" ", "-");
			console.log("xxxxx " + fracwholeInch);
			return fracwholeInch;
		}
		calculateInches(splitedNumberInch[0],splitedNumberInch[1]);

		splitedNumber[1] = calculateInches(splitedNumberInch[0],splitedNumberInch[1]);
		let splitedNumberOneSplit = splitedNumber[1].split("-");
		splitedNumber[1] = splitedNumberOneSplit[0];
		let lastNumbersSmall = splitedNumberOneSplit[1].split("/");
		console.log("SPLITED NUMBERS "+splitedNumberOneSplit[1]);
		splitedNumber[0] = splitedNumber[0]+"'";
		let smallNumbersText = lastNumbersSmall[0]+"/"+lastNumbersSmall[1]+'"';
		console.log(splitedNumber);

		
        if(netFeet>0){
			$('#final-feet').html(splitedNumber[0] + "-"+splitedNumber[1]);
			$('#final-feet-small1').html(lastNumbersSmall[0]);
			$('#final-feet-small2').html('/');
			$('#final-feet-small3').html(lastNumbersSmall[1]);
			$('#final-feet-small4').html('"');
			console.log("lastNumbersSmall[1] "+lastNumbersSmall[1]);
			
		}else if(netFeet<=0){
			$('#final-feet').html('6-8"');
		}
}