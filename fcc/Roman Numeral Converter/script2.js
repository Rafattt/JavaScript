
function convertToRoman(num) {
	var n = 1; //decimal multiplier
	var separateDecimal = [];
	var numTemp; //decimal in 100
	var numTemp2; //decimal in 1000
	
	(function separate(){
		for(i = 0; i<=10;i++){
			if(num<=10 && num >0){
				num = separateDecimal[0];
			}else if(num>10 && num<=100){
				separateDecimal[1] = num % 10;
				num = num/10;
				separateDecimal[0] = Math.floor(num);
			} else if(num>100 && num<=1000){
				numTemp = Math.floor(num/10);
				separateDecimal[2] = num %10 ;
				num = num/100;
				separateDecimal[0] = Math.floor(num);
				separateDecimal[1] = numTemp %10;
			}  else if(num>1000 && num<=10000){
				numTemp = Math.floor(num/100);
				separateDecimal[3] = num %10;
				numTemp2 =  num %100;
				numTemp2 = numTemp2/10;
				separateDecimal[2] = Math.floor(numTemp2);
				num = num/1000;
				separateDecimal[0] = Math.floor(num);
				separateDecimal[1] = numTemp %10;
				
			}
		}

	})();
	
	function convert(){
		console.log(separateDecimal)
		if(num == 1){
			num = "I";
		} else if(num == 2){
			num = "II";
		} else if(num == 3){
			num = "III";
		} else if (num == 4){
			num = "IV";
		} else if (num == 5){
			num = "V";
		} else if(num == 6){
			num = "VI";
		} else if( num == 7){
			num = "VII";
		} else if(num == 8){
			num = "VIII";
		} else if (num == 9){
			num = "IX";
		} else if (num == 10){
			num = "X";
		} else if (num == 50){
			num = "L";
		} else if(num == 100){
			num = "C";
		} else if (num == 500){
			num = "D";
		} else if (num == 1000){
			num = "M";
		}
		return num;
	}
	
	console.log(separate());
	console.log(separate());
 return num;
}

convertToRoman(1321);
