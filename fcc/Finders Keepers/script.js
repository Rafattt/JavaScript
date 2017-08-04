
function findElement(arr, func) {
  var num = 0;
  
  for(i = 0; i<arr.length; i++){
	  num = arr[i];
	  if (func(arr[i]) === true){
		  console.log(num);
		  return num;
		  break;
	  } else if (i===arr.length-1 && func(arr[i]) === false ) {
		return undefined;
	  }
  }
  
  return num;
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
