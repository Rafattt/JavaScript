function description(top, bott){
	if(top == 0 || top == ""){
		$('#description').html('Cut top 0\", cut bottom '+bott+'\" Lock 36\"');
	} else {
		$('#description').html('Cut top '+top+'\", cut bottom '+bott+'\" Lock 36\"');
	}
}