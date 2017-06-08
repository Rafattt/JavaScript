
$("#search").keyup(function(event){
		if(event.keyCode == 13){
			key();
		}
		});

function key(){
		
			for(var i = 0; i<100; i++){
				$("#result"+i).remove();
			}

		  $(".results").hide();
		  var keyword = (document.getElementById("search")).value;
		$.ajax( {
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+keyword+"&callback=?",
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(wiki) {
		var text = wiki.query.search;
		var arrLength = text.length;
		

			for(var i =0; i<arrLength;i++){
				
				var title = wiki.query.search[i].title;
				var linkTitle = wiki.query.search[i].title.replace(/ /g,"_");
				var link = "https://en.wikipedia.org/wiki/"+linkTitle;
				$(".container").append('<a href="'+link+'" target="_blank"><div class="row results center-block" id="result'+i+'">').delay("slow").fadeIn();
				$("#result"+i).css("display:block href="+link)
				
				console.log(link);
				
				
				$("#result"+i).css("cursor","pointer");
				console.log(link);
				
				document.getElementById("result"+i).innerHTML = "<b>"+wiki.query.search[i].title+"</b>" +"<br>"+wiki.query.search[i].snippet;
				
			}
			
			$(".results").slideToggle("slow");

	  
    }
} ); 
	}


		
		
	


