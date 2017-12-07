function warningTop(getHeight, totalCut, top){
	if(top>3){
		$('#warning-top').css('display','block');
		$('#final').val(getHeight()-(totalCut)+'\"');
		let frac = new Fraction(getHeight()-(totalCut)+1.75);		
		$('#net-frame').val(frac.toFraction(true)+'\"');
	} else {
		$('#warning-top').css('display','none');
	}
}