
function myReplace(str, before, after) {
	
	var strArray = str.split(" ");
	var index = strArray.indexOf(before);

	var firstCaseOfBefore = strArray[index].charAt(0);
	var beforeToUpperCase = firstCaseOfBefore.toUpperCase();
	var afterFirstChar = after.charAt(0);

		function replaceUpperCase(){
			if(firstCaseOfBefore === beforeToUpperCase){
				afterFirstChar = afterFirstChar.toUpperCase();
				} 
			return afterFirstChar;
		}
		
		afterFirstChar = replaceUpperCase();
		after = after.replace(after.charAt(0), afterFirstChar );
		strArray[index] = after;
		str = strArray.join(" ");
		

  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
