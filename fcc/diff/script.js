
function diffArray(arr1, arr2) {
  var newArr = [];
  var tempArr = [];
  var res = [];
  var res2 = [];
  var c = 0;
  var z = 0;
  var final = [];

  if(arr1.length<=arr2.length && arr1.length !== 0){
	  console.log("if working");
	  for(i=0;i<arr1.length;i++){
		  console.log("for1 working");
		  for(j=0;j<arr2.length;j++){
			  console.log("for2 working");
			  if(arr2[j]===arr1[i]){
				  
				 tempArr[c] = arr2[j];
				  c++;
				  
				  
			  } else{
				 res[z] = arr2[i];
				 res2[z] = arr1[j];
				 
				 console.log("arr2[j]:"+arr2[j]);
				 console.log("arr1[i]:"+arr1[j]);
				  
				  
				  
			  }
			  
		}
	 }
	 
  } else if (arr1.length == 0) {
	   res = arr2;
  } else {
	  for(i=0;i<arr2.length;i++){
		 
		  for(j=0;j<arr1.length;j++){
		
			  if(arr2[i]===arr1[j]){
				  
				 tempArr[c] = arr1[i];
				  c++;
				  
				  
			  } else{
				 res[z] = arr1[j];
				 res2[z] = arr2[j];
				  
				  
				  
			  }
			  
		}
	 }
  }
  
 	 
  console.log(tempArr);
  console.log("res: "+res);
  console.log("res2: "+res2);
  final = res.concat(res2);
  console.log(final);

  // Same, same; but different.
  return final;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);