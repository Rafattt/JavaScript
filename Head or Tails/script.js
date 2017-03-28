var userChoice = 0;
var cpuChoice = 0;
var winCount = 0;

function headsChosen(){
	userChoice = 1;
	var cpuChoice = Math.floor(Math.random() * 2) + 1;
    console.log(userChoice);	
	console.log(cpuChoice);
	if(userChoice == cpuChoice){
		console.log("You win");
		document.getElementById("result").innerHTML ="The coin landed on heads. You win!";
		document.getElementById("result").style.color = "gold";
		winCount++;
		console.log("You have won: "+winCount+" times!");
	} else {
		console.log("You Lose");
		document.getElementById("result").innerHTML ="The coin landed on tails. You Lose!";
		document.getElementById("result").style.color = "red";
		winCount--;
		console.log("You have won: "+winCount+" times!");
	}
}

function tailsChosen(){
	userChoice = 2;
	var cpuChoice = Math.floor(Math.random() * 2) + 1;
    console.log(userChoice);	
	console.log(cpuChoice);
	if(userChoice == cpuChoice){
		console.log("You win");
		winCount++;
		document.getElementById("result").innerHTML ="The coin landed on tails. You win!";
		document.getElementById("result").style.color = "gold";
		console.log("You have won: "+winCount+" times!");
	} else {
		console.log("You Lose");
		document.getElementById("result").innerHTML ="The coin landed on heads. You Lose!";
		document.getElementById("result").style.color = "red";
		winCount--;
		console.log("You have won: "+winCount+" times!");
	}
}







