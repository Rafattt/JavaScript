
function pairElement(str) {
	
	var pair = ["A", "T", "C", "G"];
	var pair2 = ["T", "A", "G", "C"];
	var strSplitted = [];
	strSplitted = str.split("");
	
	function checkChar (data, charDNA, charDNApair){
		for(i = 0; i<data.length; i++){
			for(j = 0; j<data.length; j++){
				if(data[i] == charDNA[j]){
					data[i] = (data[i] + charDNApair[j]).split("");	
					
				}
			}
		}
		return data;
	}
	str = checkChar(strSplitted, pair, pair2);
	
  return str;
}

pairElement("ATCGA");
