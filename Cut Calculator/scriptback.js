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

	
	$('#checkBox').click(function(event){
		if(controlNumber === 0){
			$('#top').css('background-color','white');
			$('#top').css('pointer-events', 'auto');
			controlNumber = 1;
		} else {
			$('#top').css('background-color','lightgrey');
			$('#top').css('pointer-events', 'none');
			$('#top').val(0);
			controlNumber = 0;
		}
		
		
		
	});
	
	(function setHeight(){
		if(getHeight() === 80){
			$('#door').css('height','267px');
			$('#door-height').css('height','267px');
			$('#door-height').css('top','92px');
			$('#door').css('margin-top','93px');
			$('#actual').val(80);
			$('#height-center').html('6\'-8\"');
		} else if (getHeight() === 84){
			$('#door').css('height','280px');
			$('#door-height').css('height','280px');
			$('#door-height').css('top','79px');
			$('#door').css('margin-top','80px');
			$('#actual').val(84);
			$('#height-center').html('7\'-0\"');
		} else if (getHeight() === 96){
			$('#door').css('height','320px');
			$('#door-height').css('height','320px');
			$('#door-height').css('top','39px');
			$('#door').css('margin-top','40px');
			$('#actual').val(96);
			$('#height-center').html('8\'-0\"');
		}
		let t = setTimeout(setHeight, 500);
	})();
	
	(function bottomCut(){
		let bott = $('#bottom').val();
		let top = $('#top').val();
		let totalCut = "";
		if($('#top').val()!== 0 && $('#top').val() !== ""){
			totalCut = parseInt(bott)+parseInt(top);
		} else {
			totalCut = bott+top;
		}
		
		if(bott<=7 && bott !== 0 && bott !== ""){
			$('#warning-bottom').css('display','none');
			$('#final').val(getHeight()-(totalCut)+'\"');
			console.log(typeof(bott));
			
		} else if(bott>7){
			$('#warning-bottom').css('display','block');
			
		} else if(top>3){
			$('#warning-top').css('display','block');
			
		} else if(top>3 && bott>7){
			$('#warning-top').css('display','block');
			$('#warning-bottom').css('display','block');
			
		} else if (bott == 0 || bott == "") {
			$('#final').val("");
		}
		
		bott = (bott*10)/3;
		top =  (top*10)/3;
		$('#top-cut-draw').css('height',top+'px');

		$('#bottom-cut-draw').css('height',bott+'px');
		$('#bottom-cut-draw').css('top',359-bott);
		
		if(bott>0){
			$('.cut-text').css('display','block');
			$('.cut-text').html((bott*3)/10);
		} else if (bott<=0 || bott ==""){
			$('.cut-text').css('display','none');
		}
			
			let t = setTimeout(bottomCut, 500);
		})();
	
	
	
	
});