
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
 
   var sourceKeys = Object.keys(source);
	console.log(source[sourceKeys]);
	console.log(collection[sourceKeys]);
	
	function checkIf(obj){
		for(i = 0; i<sourceKeys.length; i++){
			if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
				return false;
			} else {
				
			}
		}return true;
	}
	arr = collection.filter(checkIf);
	console.log(arr);


  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
