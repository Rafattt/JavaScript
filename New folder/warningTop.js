function warningTop(getHeight, totalCut, top){
	let netFeet = convert($('#rough-size').val());
	netFeet = parseFloat(netFeet)-2;
	netFeet = netFeet/12;
	let fracFeet = new Fraction(netFeet);	
		fracFeet = fracFeet.toFraction(true);
		fracFeet = fracFeet.replace(" ", "-");
	if(top>3){
		$('#warning-top').css('display','block');
		let finFrac = new Fraction(getHeight()-(totalCut));	
		finFrac = finFrac.toFraction(true);
		finFrac = finFrac.replace(" ", "-");	
		$('#final').val(finFrac+'\"');
		let net = $('#rough-size').val();
		net = parseFloat(net);
		net = net -0.25;
		
		let frac = new Fraction(net);	
		frac = frac.toFraction(true);
		frac = frac.replace(" ", "-");
		$('#net-frame').val(frac+'\"');
	} else {
		$('#warning-top').css('display','none');
		let finFrac = new Fraction(getHeight()-(totalCut));	
		finFrac = finFrac.toFraction(true);
		finFrac = finFrac.replace(" ", "-");	
		$('#final').val(finFrac+'\"');
	}
}