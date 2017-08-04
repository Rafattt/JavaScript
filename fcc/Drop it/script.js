
function dropElements(arr, func) {
  // Drop them elements.
  var temp = arr.length;
  
  for(i = 0; i<temp;i++){
	  if( func(arr[i]) === false){
		 arr.shift();
         temp--;
         i--;
	  } else {
		return arr;
	  }
  }
  
  
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
