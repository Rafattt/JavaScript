/*
Darpet Cut Calculator 1.1
Author: Rafal Kmiecik 
rafalkmiecik@gmail.com
*/


let variables = {
	roughOpeningSize: 0,
	roughSize: getRoughSize =>  document.getElementById("rough-size").value, //geting value from input field 
	roughSizeValue: getRoughSizeValue =>  parseFloat(document.getElementById("rough-size").value),//geting value from input field and converting it to floats
			
		 
	submitButton: document.getElementById("sub"),
	slab: 0, //default height of slab
	
}

let app = {
	clickByEnter: clickEnter = () => { //function that allows using "enter" key instead of submit button
		document.getElementById("rough-size")
    		.addEventListener("keyup", function(event) {
    		event.preventDefault();
    	if (event.keyCode === 13) {
        	document.getElementById("sub").click();
    	}
		});
	},
	slabHeight: getHeight = () => {//getting height (in inches) of rough opening and choosing slab height to cut (one size bigger than RO sizes)
		document.getElementById("sub").onclick = () => { //starts when user clicks on submit button
			//console.log(parseFloat(document.getElementById("rough-size").value));
			variables.roughSizeValue = parseFloat(document.getElementById("rough-size").value);
			console.log("variables.roughSizeValue "+variables.roughSizeValue);
			console.log("variables.roughSize "+variables.roughSize);
			if(variables.roughSize !==0 && variables.roughSize !== ""){ //checks if user typed somethng into "#rough-size" field
				roughOpeningSize = sizeConvertion.convert(variables.roughSize()); //converting "0-0" format to "0.0" format
				console.log("11111 "+roughOpeningSize);
				showSizeinFeets(); //function calculate inches to feet -inch
			} else {
				console.log(document.getElementById("rough-size").value);
			}
		}	
	}
}

app.clickByEnter();
getHeight();
