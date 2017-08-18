
function addTogether() {
	
	if(typeof arguments[0]==='number' && typeof arguments[1]!=='string'){
			var firstArgument = arguments[0];
			var result;
			var arrLength = arguments.length;
	
			if(arrLength<2){
				return function(){
					if(typeof arguments[0]==='number'){
						var secoundArgument = arguments[0];
						result = firstArgument+secoundArgument;
						return result;
					} else {
						return undefined;
					}
    
				};
			} else {
				result = arguments[0]+arguments[1];
				return result;
			}
	} else {
		return undefined;
	}
	} 


addTogether(2, "3");
