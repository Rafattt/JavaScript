$(document).ready(function (){
	'use strict';
	var numberOfPlayers = ""; //number of players one or two
	var	playerOneSymbol = ""; //symbol used by player one 'X' or 'O'
	var playerTwoSymbol = ""; //symbol used by player two 'X' or 'O'
	var	difficultyLevel = ""; //level of difficulty choosen at the begining
	var	controlNumber = 0;	//holding information about whose turn is it, 0 for player one and 1 for player two
	var	clickedField = "";	//holding information about field name(number) clicked by player
	var playerOneFields = []; //fields selected by player one
	var playerTwoFields = []; //fields selected by player two
	var playerOneScore = 0;
	var playerTwoScore = 0;
	var result = "";
	var	emptyFields = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
	
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
	
	
	players();
	
	function players(){	//choosing number of players
	$('.players').click(function(event){	
		numberOfPlayers = event.target.id;
		

		if(numberOfPlayers === 'one-player'){
			// single player game function goes here
			$("#number-of-players-box").css('display','none');
			$("#choose-symbol-box").css('display','block');
			choseSymbol();
		} else if(numberOfPlayers === 'two-players'){

			// multi player game function goes here
		}
	});
	}
	
	function choseSymbol(){ //chiosing player symbol 'X' or 'O'
		$('.symbols').click(function(event){	//
			playerOneSymbol = event.target.id;
			if(playerOneSymbol === 'X'){
				playerTwoSymbol ='O';
			} else if( playerOneSymbol === 'O'){
				playerTwoSymbol = 'X';
			}
			$("#choose-symbol-box").css('display','none');
			$("#difficulty-level-box").css('display','block');
			
			difficultyLevelFunction();
		});
	}
	
	function difficultyLevelFunction(){ //choosing difficulty level
		$('.difficulty').click(function(event){
			difficultyLevel = event.target.id;
			$("#difficulty-level-box").css('display','none');
			$(".fields").css('border','1px solid white');
			switch(difficultyLevel){
				case 'easy':
					console.log('easy');
					easy();
					break;
				case 'normal':
					normal();
					console.log('normal');
					break;
				case 'hard':
					console.log('hard');
					break;
			}
		});
	}
	
	
	
	
	function easy(){ //easy difficulty single player game
			
				$('.fields').click(function(event){
			
					clickedField = event.target.id;
					playerOneFields.push(clickedField);
					emptyFields.splice(emptyFields.indexOf(clickedField), 1);
					$('#'+clickedField).html(playerOneSymbol).css('pointer-events', 'none');
					checkIfWin(playerOneFields);
					controlNumber = 1; //player one turn ends, changing controlNumber to one to starts CPU turn
					
				let randomField = emptyFields[Math.floor((Math.random() * (emptyFields.length-1)) + 0)];
				setTimeout(function() {
					$('#'+randomField).html(playerTwoSymbol).css('pointer-events', 'none');
					playerTwoFields.push(randomField);
					emptyFields.splice(emptyFields.indexOf(randomField), 1);
					checkIfWin(playerTwoFields);
					controlNumber = 0;
					}, 500);
				});
					
	}
	
	function normal(){ //normal difficulty single player game
			
				$('.fields').click(function(event){
			
					console.log("here");
					clickedField = event.target.id;
					playerOneFields.push(clickedField);
					emptyFields.splice(emptyFields.indexOf(clickedField), 1);
					$('#'+clickedField).html(playerOneSymbol).css('pointer-events', 'none');
					checkIfWin(playerOneFields);
				 //player one turn ends, changing controlNumber to one to starts CPU turn
					
					console.log(playerOneFields);

				
				setTimeout(function() {
						checkIfTwoSymbolsInRow();
							
					
					
					}, 500);
				
				});
					
	}
	
	function checkIfWin(player){
		console.log("checkifwin: "+player);
		for(let i = 0; i < 8;i++){ //checking if winConditions and player(One/Two)Field have common elements
			var res = winConditions[i].filter(function(v){
				return player.indexOf(v) > -1;
			});
				
			if(res.length === 3){ //if all 3 elements from winConditions array are in player(One/Two)Field player wins
				
				for(let i = 0; i<=emptyFields.length; i++){
					$('#'+emptyFields[i]).css('pointer-events', 'none');
				}
					
				if(player === playerOneFields){
					$("#player-one-win").css('display','block');
					setTimeout(function() {
						$("#player-one-win").css('display','none');
						playerOneScore++;
						$('#score-player-one').html(playerOneScore);
						for(let j = 0;j<9;j++){
							$('#'+emptyFields[j]).css('pointer-events', 'none');
						}
						result = "win";
						restart();
					}, 2000);
					
				} else if(player === playerTwoFields) {
					$("#player-two-win").css('display','block');
					setTimeout(function() {
						$("#player-two-win").css('display','none');
						playerTwoScore++;
						$('#score-player-two').html(playerTwoScore);
						for(let j = 0;j<9;j++){
							$('#'+emptyFields[j]).css('pointer-events', 'none');
						}
						result = "win";
						restart();
						}, 2000);
					}
					
				result = "win";
				res = "";
					
			} else {
					
			}
		}	
	}
	
	function checkIfTwoSymbolsInRow(){
							for(let i = 0; i < 8;i++){
								var res2 = winConditions[i].filter(function(v){
							return playerOneFields.indexOf(v) > -1;
						});
							if(res2.length === 2){
								var nextCPUmove = winConditions[i];
									for(let j = 0; j<2;j++){
										nextCPUmove.splice(nextCPUmove.indexOf(res2[j]), 1)
									}
									nextCPUmove = nextCPUmove.toString();
									if(playerOneFields.indexOf(nextCPUmove)=== -1 && playerTwoFields.indexOf(nextCPUmove)=== -1){
										console.log("INDEX "+emptyFields.indexOf(nextCPUmove));
										console.log("EMPTYFIELDS "+emptyFields);
										console.log("nextCPUmove "+nextCPUmove);
										console.log("nextCPUmove TYPE OF "+typeof(nextCPUmove));
										console.log("emptyfield TYPE OF "+typeof(emptyFields[0]));
										
									
									$('#'+nextCPUmove).html(playerTwoSymbol).css('pointer-events', 'none');
									emptyFields.splice(emptyFields.indexOf(nextCPUmove), 1);
									playerTwoFields.push(nextCPUmove);
									checkIfWin(playerTwoFields);
									} else {
										let randomField = emptyFields[Math.floor((Math.random() * (emptyFields.length-1)) + 0)];
								$('#'+randomField).html(playerTwoSymbol).css('pointer-events', 'none');
								playerTwoFields.push(randomField);
								emptyFields.splice(emptyFields.indexOf(randomField), 1);
								checkIfWin(playerTwoFields);
								controlNumber = 0;
									}
									
								return false;
							
							} else if (res2.length < 2 && i==7) {
								let randomField = emptyFields[Math.floor((Math.random() * (emptyFields.length-1)) + 0)];
								$('#'+randomField).html(playerTwoSymbol).css('pointer-events', 'none');
								playerTwoFields.push(randomField);
								emptyFields.splice(emptyFields.indexOf(randomField), 1);
								checkIfWin(playerTwoFields);
								controlNumber = 0;
								
							}
							checkIfWin(playerOneFields);
							}
						}
	
	function restart(){
			
			result = "";
			playerOneFields = [];	
			playerTwoFields = [];
			controlNumber = 0;
			emptyFields = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
			
			for(var i = 0; i<=emptyFields.length; i++){
				$("#"+emptyFields[i]).html("");
				$('#'+emptyFields[i]).css('pointer-events', 'auto');
			}
			
			
		}
	
	
	
	
		
	
});