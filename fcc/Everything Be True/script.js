
function truthCheck(collection, pre) {
  // Is everyone being true?
  var newArr = [];
  
  function checkIfArray(data){
	   
		    if(!Array.isArray(data)){
				newArr.push(data);
	   } else  {
		    for(var arg in data){
		   checkIfArray(data[arg]);
	   }
	   }
   }
   
     checkIfArray(collection);
  
  var count = 0;
  function searchForArg(){
  for(i = 0; i<newArr.length;i++){
	  
	  if(isNaN(newArr[i][pre]) === true && typeof newArr[i][pre] !== 'string' ){
		break; 
	  }
  else if(newArr[i].hasOwnProperty(pre) && newArr[i][pre] != null && newArr[i][pre] !== "" && newArr[i][pre] != 0){
	  count++;
  } else {
		break; 
  }
  }
}

searchForArg();
  if(count !== newArr.length){
	  pre = false;
  } else {
	  pre = true;
  }
  
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
