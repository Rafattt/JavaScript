
function fearNotLetter(str) {
	var missingChar;
	
	function findLetter(){
		for(i = 0; i<str.length; i++){
	
			if((str.charCodeAt(i)-str.charCodeAt(i-1))>1){
				missingChar = String.fromCharCode(str.charCodeAt(i)-1);
			}
		}
		return missingChar;
	}
	
	
	str = findLetter();
  return str;
}

fearNotLetter("abce");
