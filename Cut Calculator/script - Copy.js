$(document).ready(function(){
	let controlNumber = 0;
	function getHeight(){
		let heightTemp = 0;
		if($('#selectHeight').find(":selected").text() === '6\'-8\" Height (80\")'){
			heightTemp = 80;
		} else if($('#selectHeight').find(":selected").text() === '7\'-0\" Height (84\")') {
			heightTemp = 84;
		} else if ($('#selectHeight').find(":selected").text() === '8\'-0\" Height (96\")'){
			heightTemp = 96;
		} 
		const height = heightTemp;
		let t = setTimeout(getHeight, 1000);
		return height;
	};
	
	function getFinalHeight(){
		const finalHeight = document.getElementById("final-height").value;
		let t = setTimeout(getFinalHeight, 1000);
		return finalHeight;
	};
	
	(function bottomTrim(){
		let trimFromBottom = getHeight()-getFinalHeight();
		$('#bottom-trim').html(trimFromBottom);
		let t = setTimeout(bottomTrim, 500);
	})();
	
	$('#checkBox').click(function(event){
		if(controlNumber === 0){
			$('#top-text').css('background-color','lightgrey');
			$('#top-text').css('pointer-events', 'none');
			controlNumber = 1;
		} else {
			$('#top-text').css('background-color','white');
			$('#top-text').css('pointer-events', 'auto');
			controlNumber = 0;
		}
		
		
		
	});
	
	
});