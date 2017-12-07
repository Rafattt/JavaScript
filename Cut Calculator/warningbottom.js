function warningBottom(bott, totalCut){
	if(bott<=7 && bott !== 0 && bott !== ""){
		$('#warning-bottom').css('display','none');
		let finFrac = new Fraction(getHeight()-(totalCut));	
		$('#final').val(finFrac.toFraction(true)+'\"');
		let frac = new Fraction(getHeight()-(totalCut)+1.75);		
		$('#net-frame').val(frac.toFraction(true)+'\"');
		
	} else if (bott == 0 || bott == "") {
		$('#final').val("");
	}
			
	if(bott>7 && $('#rough-size').val()>0 && $('#rough-size').val() !==""){
		$('#warning-bottom').css('display','block');
		let finFrac = new Fraction(getHeight()-(totalCut));	
		$('#final').val(finFrac.toFraction(true)+'\"');
		let frac = new Fraction(getHeight()-(totalCut)+1.75);		
		$('#net-frame').val(frac.toFraction(true)+'\"');
	} else if(bott<7) {
		$('#warning-bottom').css('display','none');
	}
	
		
}
