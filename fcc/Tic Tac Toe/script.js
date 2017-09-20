$(document).ready(function (){
	'use strict';
	var symbol = "";
	var playerTwoSymbol = "";
	var numberOfPlayers = "";
	var controlNumber = 0;
	var playerOneFields = [];
	var playerTwoFields = [];
	var winConditions = [
		["a1","a2","a3"],
		["a1","b1","c1"],
		["a1","b2","c3"],
		["b1","b2","b3"],
		["c1","b2","a3"],
		["a2","b2","c2"],
		["a3","b3","c3"],
		["c1","c2","c3"]
	];
	
	$('.players').click(function(event){
		numberOfPlayers = event.target.id;
		console.log(numberOfPlayers);
		if(numberOfPlayers === 'one-player'){
		$("#number-of-players-box").css('visibility','hidden');
		$("#choose-symbol-box").css('visibility','visible');
		} else if(numberOfPlayers === 'two-players'){
			$("#number-of-players-box").css('visibility','hidden');
		$("#choose-symbol-box").css('visibility','visible');
		}
	});
	
	$('.symbols').click(function(event){
		symbol = event.target.id;
		if(symbol == "X"){
					playerTwoSymbol = "O";
					} else if(symbol == "O"){
						playerTwoSymbol = "X";
					}
		$("#choose-symbol-box").css('visibility','hidden');
		
	});
	
	$('.fields').click(function(event){
		 var field = event.target.id;
		// $('#'+field).html(symbol);
		 if(controlNumber == 0){
				$('#'+field).html(symbol);
				$('#'+field).css('pointer-events','none'); //making field inactive after click
				playerOneFields.push(field);
				controlNumber = 1;
				
				

				
				console.log("player: "+playerOneFields);
				for(var i= 0; i<8;i++){
					// fragment copied from stack starts here
				var res = winConditions[i].filter(function(v) { // iterate over the array
  // check element present in the second array
  return playerOneFields.indexOf(v) > -1;
  // or array2.includes(v)
})

console.log(res);
// fragment copied from stack ends here
if(res.length === 3){
	document.write("You win");
}
				}


				/*if($(winConditions[0]).not(playerOneFields).length === 0 && $(playerOneFields).not(winConditions[0]).length === 0){
					document.write("You Win!");
				}*/
					
				
			} else if(controlNumber == 1){
				$('#'+field).html(playerTwoSymbol);
				$('#'+field).css('pointer-events','none');
				controlNumber = 0;
			}
		 console.log(field);
	});
});