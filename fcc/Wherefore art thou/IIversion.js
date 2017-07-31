
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection;
  var sourceName = Object.getOwnPropertyNames(source)[0];
  sourceName = String(sourceName);
  console.log(source[sourceName]);
  console.log(arr.length);
  var solution = [];
  var n = 0;
  var arr2 = [];
  for(i = 0;i<=arr.length-1;i++){
	  if(source[sourceName] === collection[i][sourceName]){
		  solution[n] = collection[i];
		  n++;
	  } else {
		
	  }
  }
  console.log(collection);
 
  console.log(solution);
   console.log(arr);

  
  // Only change code above this line
  return solution;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
