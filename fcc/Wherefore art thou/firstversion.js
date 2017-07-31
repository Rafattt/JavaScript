
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection;
  var sourceName = Object.getOwnPropertyNames(source)[0];
  sourceName = String(sourceName);
  console.log(source[sourceName]);
  console.log(arr.length);
  var solution;
  var arr2 = [];
  for(i = 0;i<=arr.length-1;i++){
	  if(source[sourceName] === collection[i][sourceName]){
		  solution = collection[i];
	  } else {
		
	  }
  }
  console.log(collection);
  arr2.push(solution);
  console.log(solution);
   console.log(arr);

  
  // Only change code above this line
  return arr2;
}

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
