$(document).ready(function (){
	'use strict';
	var randomNumber = "";
	var randomArray = [];
	var clickedBox = "";
	var clickedBoxes = [];
	var score = 0;
	var a = 0;
	var control = 0;
	var ret = 0;
	var match = 0;
	
	
	function random(){
		
		
			randomNumber = Math.floor((Math.random() * 4) + 1);
			randomArray.push(randomNumber);
			
	}
	
	$('#start').click(function(){
		game();
				
				
	});
	
	function game(){
		control = 0;
				 random();
			
				 console.log(randomNumber);
				 
				 
				 console.log(randomArray);
				 for(let i = 0;i<randomArray.length;i++){
					let t = i*1000;
			 	setTimeout(function() {
						
					  console.log("randomArray[i]: "+randomArray[i]);
					 	 switch(randomArray[i]){
				case 1:
					$('#a').css('background-color', 'white'); 
					restoreColor();
					break;	
				case 2:
					$('#b').css('background-color', 'white');
					restoreColor();
					
					break;
				case 3:
					$('#c').css('background-color', 'white');
					restoreColor();
					
					break;
				case 4:
					$('#d').css('background-color', 'white');
					restoreColor();
					
					break;
			}
			control = 1;
			
				}, t);
				}
	}
	
	clickedBoxes = [];
	$('.gameb').click(function(event){	
		clickedBox = event.target.id;
		console.log(clickedBox);
		if(clickedBox === 'a'){
			clickedBox = 1;
		} else if(clickedBox === 'b'){
			clickedBox = 2;
		} else if(clickedBox === 'c'){
			clickedBox = 3;
		} else if(clickedBox === 'd'){
			clickedBox = 4;
		}
		let maxLength = clickedBoxes.length - randomArray.length;
		if(randomArray.length>1){
			for(let y = 0;y<=maxLength;y++){
			clickedBoxes.shift();
		}
		
		clickedBoxes.push(clickedBox);
		} else {
			clickedBoxes.push(clickedBox);
		}
		
		
		checkCommonElements();
		if (match === 1){
			score++;
			$('#score').html(score);
			match = 0;
		} else {
			score = 0;
			$('#score').html(score);
		}
		
		
		
});

function checkCommonElements(){
	for(let w = 0;w<=randomArray.length; w++){
			if(randomArray[w]===clickedBoxes[w]){
			
			
			ret++;
		}else if((randomArray.toString()===clickedBoxes.toString()) && (randomArray.length===clickedBoxes.length)){
			
			ret = 0;
		
		}
		}
		if(randomArray.length == ret){
			match = 1;
		}
}


function restoreColor(){
	setTimeout(function() {
	$('#a').css('background-color', 'blue');
	$('#b').css('background-color', 'red');
	$('#c').css('background-color', 'green');
	$('#d').css('background-color', 'yellow');
	}, 500);
	
}

function simon(){
	
		

}
	
	
});
	
