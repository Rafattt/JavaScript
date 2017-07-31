
function translatePigLatin(str) {
	var vovels = ["a", "e", "i", "o", "u", "y"];
	var ay = "ay";
	var way = "way";
	var substractChar;
	var firstChar = str[0];
	var n = 0;
	
	 function check(letter, vov){
		for(i = 0; i<vovels.length; i++){
			if(letter == vov[i]){
				n++;
				
			} else {
				
			}
		}
		if(n>0){
			return true;
		} else {
			return false;
		}
	}
	
	
	
	function checkIfVovel(){
		
			if((check(str[0], vovels)) == true){
				str = str.concat(way);
				console.log("jeden");
			}	
			 else if ((check(str[1], vovels)) == true && (check(str[0], vovels)) == true ){
				substractChar = str.substr(1);
				str = str.replace(str[0], "");
				str = substractChar.concat(firstChar+ay);
				console.log("dwa");
				i = vovels.length-1;
			} else if ((check(str[0], vovels)) == false) {
				firstChar = str[0].concat(str[1]);
				substractChar = str.substr(2);
				console.log(str);
				console.log(substractChar);
				str = substractChar.concat(firstChar+ay);
				console.log("trzy");
				
				
			}
		
		return str;
	}
	
	str = checkIfVovel();
	console.log(firstChar);
	console.log(str);
  return str;
}

translatePigLatin("glove");
