
function uniteUnique(arr, arr2, arr3, arr4) {
	
var fullArray = arr.concat(arr).concat(arr2).concat(arr3).concat(arr4);
var indexOfArray = [];
var newArray = [];

	for(i= 0; i<fullArray.length; i++){
		index = fullArray[i];
		indexOfArray[i] = fullArray.indexOf(index);
		if((newArray.indexOf(index)===-1) && fullArray[i]!== null && fullArray[i]!== undefined){
			newArray.push(fullArray[i]);
		}
	}
	
	arr = newArray;
	
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
