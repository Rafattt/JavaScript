
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var newArr = arr1.concat(arr2);
  var inOf = []; //array to store index of duplicates
  var j = 0;
  var temp;
  var finalArr = [];
  

  console.log(newArr[2]);
  for (i = 0; i <=newArr.length-1; i++){
	  temp = newArr.indexOf(newArr[i]);
	  
	  if(temp!==newArr.lastIndexOf(newArr[i])){
		  console.log(newArr.indexOf(newArr[i]));
	  }
	  else {
		  inOf.push(temp);
	  }
  }
  
	console.log(newArr);
  console.log(inOf);
  
  for(j = 0; j<=inOf.length-1; j++){
	  var tem = inOf[j];
	  finalArr.push(newArr[tem]);
  }
  console.log(finalArr);
  
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
