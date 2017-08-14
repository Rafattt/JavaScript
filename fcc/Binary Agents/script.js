
function binaryAgent(str) {
	

	var result;
	var singleBinnarys = [];
	var textArray = [];
	singleBinnarys = str.split(" "); 

	for(i = 0; i<singleBinnarys.length; i++){
		textArray.push(String.fromCharCode(parseInt(singleBinnarys[i], 2)));	
	}
	
	result = textArray.toString();
	result = result.replace(/,/g, "");
	console.log(result);
	
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
