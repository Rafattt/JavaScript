
function convertToRoman(num) {
	var n = 1; //decimal multiplier
	var separateDecimal = [];
	var numTemp; //decimal in 100
	var numTemp2; //decimal in 1000
	var numm = num;
	var finalConversion;
	var finalConversionJoinedTemp = [];
	var finalConversionJoined;
	
	function separate(){
		for(i = 0; i<=10;i++){
			
			if(numm > 0 && numm < 10 ){
				separateDecimal[0] = numm;
			}else if(num>10 && num<=100){
				separateDecimal[1] = num % 10;
				num = num/10;
				separateDecimal[0] = Math.floor(num)*10;
			} else if(num>100 && num<=1000){
				numTemp = Math.floor(num/10);
				separateDecimal[2] = num %10 ;
				num = num/100;
				separateDecimal[0] = Math.floor(num)*100;
				separateDecimal[1] = (numTemp %10)*10;
			}  else if(num>1000 && num<=10000){
				numTemp = Math.floor(num/100);
				separateDecimal[3] = num %10;
				numTemp2 =  num %100;
				numTemp2 = numTemp2/10;
				separateDecimal[2] = Math.floor(numTemp2)*10;
				num = num/1000;
				separateDecimal[0] = Math.floor(num)*1000;
				separateDecimal[1] = (numTemp %10)*100;
				
			}
		}
		return separateDecimal;
	}
	separateDecimal = separate();
	
	
	
	finalConversion = function convert(){
		for (n =0; n<=separateDecimal.length; n++){
			if(separateDecimal[n] == 1){
				separateDecimal[n] = "I";
			} else if(separateDecimal[n] == 2){
				separateDecimal[n] = "II";
			} else if(separateDecimal[n] == 3){
				separateDecimal[n] = "III";
			} else if(separateDecimal[n] == 4){
				separateDecimal[n] = "IV";
			} else if(separateDecimal[n] == 5){
				separateDecimal[n] = "V";
			} else if(separateDecimal[n] == 6){
				separateDecimal[n] = "VI";
			} else if(separateDecimal[n] == 7){
				separateDecimal[n] = "VII";
			} else if(separateDecimal[n] == 8){
				separateDecimal[n] = "VIII";
			} else if(separateDecimal[n] == 9){
				separateDecimal[n] = "IX";
			} else if(separateDecimal[n] == 10){
				separateDecimal[n] = "X";
			} else if(separateDecimal[n] == 20){
				separateDecimal[n] = "XX";
			} else if(separateDecimal[n] == 30){
				separateDecimal[n] = "XXX";
			} else if(separateDecimal[n] == 40){
				separateDecimal[n] = "XL";
			} else if(separateDecimal[n] == 50){
				separateDecimal[n] = "L";
			} else if(separateDecimal[n] == 60){
				separateDecimal[n] = "LX";
			} else if(separateDecimal[n] == 70){
				separateDecimal[n] = "LXX";
			} else if(separateDecimal[n] == 80){
				separateDecimal[n] = "LXXX";
			} else if(separateDecimal[n] == 90){
				separateDecimal[n] = "XC";
			} else if(separateDecimal[n] == 100){
				separateDecimal[n] = "C";
			} else if(separateDecimal[n] == 200){
				separateDecimal[n] = "CC";
			} else if(separateDecimal[n] == 300){
				separateDecimal[n] = "CCC";
			} else if(separateDecimal[n] == 400){
				separateDecimal[n] = "CD";
			} else if(separateDecimal[n] == 500){
				separateDecimal[n] = "D";
			} else if(separateDecimal[n] == 600){
				separateDecimal[n] = "DC";
			} else if(separateDecimal[n] == 700){
				separateDecimal[n] = "DCC";
			} else if(separateDecimal[n] == 800){
				separateDecimal[n] = "DCCC";
			} else if(separateDecimal[n] == 900){
				separateDecimal[n] = "CM";
			} else if(separateDecimal[n] == 1000){
				separateDecimal[n] = "M";
			} else if(separateDecimal[n] == 2000){
				separateDecimal[n] = "MM";
			} else if(separateDecimal[n] == 3000){
				separateDecimal[n] = "MMM";
			}
		}
		
	
		return separateDecimal;
	}

	
	finalConversionTemp = finalConversion();
	finalConversionJoined = finalConversionTemp.join("");
	finalConversionJoined = finalConversionJoined.replace(/0/g,'');
 return finalConversionJoined;
}

convertToRoman(2004);
