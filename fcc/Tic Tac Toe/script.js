$(document).ready(function (){
	'use strict';
	var playerOneSymbol = "";	//variable for storing X or O for player one
	var playerTwoSymbol = "";	//variable for storing X or O for player two
	var numberOfPlayers = "";
	var controlNumber = 0;	//checking whose turn is it
	var fieldsClicked = 0;	//counting how mony fields has ben clicked, 9 is max and if nobody wins before it is a draw
	var playerOneFields = [];	//array for storing names of field marked by player one
	var playerTwoFields = [];	//array for storing names of field marked by player two
	var result = "";
	var winConditions = [	//cominations of wining fields
		["a1","a2","a3"],
		["a1","b1","c1"],
		["a1","b2","c3"],
		["b1","b2","b3"],
		["c1","b2","a3"],
		["a2","b2","c2"],
		["a3","b3","c3"],
		["c1","c2","c3"]
	];
		// PROGRAM STARTS HERE
		game;
		
		function twoPlayersGame(){	//multiplayer game
			$("#number-of-players-box").css('visibility','hidden');
			$("#choose-symbol-box").css('visibility','visible');
			symbolsMenu();
			clickedField;
		}
		//playerMoves function writing player symbol on clicked field and making this field inactive
		function playerMoves(player, symbol, control, playerNumber, field){
			
			$('#'+field).html(symbol);
			$('#'+field).css('pointer-events', 'none');
			console.log("here");
			player.push(field);
			controlNumber = control;	//changing control number to signalize that turn is over
			
			for(let i = 0; i < 8;i++){ //checking if winConditions and player(One/Two)Field have common elements
				
				var res = winConditions[i].filter(function(v){
					return player.indexOf(v) > -1;
				});
				if(res.length === 3){ //if all 3 elements from winConditions array are in player(One/Two)Field player wins
					document.write("Player "+playerNumber+" Win");
					result = "win";
				} 
			}
		}
		
	function symbolsMenu(){ //choosing symbol 'X' or 'O'
		$('.symbols').click(function(event){
		playerOneSymbol = event.target.id;
		
		if(playerOneSymbol == "X"){
					playerTwoSymbol = "O";
					} else if(playerOneSymbol == "O"){
						playerTwoSymbol = "X";
					}
		$("#choose-symbol-box").css('visibility','hidden');
	});
	}
	
	var game = $('.players').click(function(event){	//
		numberOfPlayers = event.target.id;
		
		if(numberOfPlayers === 'one-player'){
			$("#number-of-players-box").css('visibility','hidden');
			$("#choose-symbol-box").css('visibility','visible');
		} else if(numberOfPlayers === 'two-players'){
			twoPlayersGame();
		}
	});
	
	var clickedField = $('.fields').click(function(event){	//checking which field was clicked and getting id of this field
		var field = event.target.id;
			
		if(controlNumber === 0){
			playerMoves(playerOneFields, playerOneSymbol, 1, "One", field);
			console.log("playerOneMoves");
		} else if(controlNumber === 1){
			playerMoves(playerTwoFields, playerTwoSymbol, 0, "Two", field);
			console.log("playerTwoMoves");
		}
		fieldsClicked++;	//increment number of field clicked
		
		if(fieldsClicked === 9 && result !="win"){	//if nubady wins and all field 990 has been clicked it is draw
			
			document.write("Draw!");
		}
	});
	
});