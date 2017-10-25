var giphySelection = [];

$('#searchGiphy').on('click', function(event){
	event.preventDefault();

	var search = $('#term').val().trim();
	giphySelection.push(search);
	createButton();
	// $('#term').reset();
// });		


	createButton();

	var basicURL = $.get("https://api.giphy.com/v1/gifs/search?");

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=wCxsPXD0Qj0Pa8b0Mb0cNLhHd7a1gi0V&limit=10";
		console.log(queryURL);
       
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response)
      });
});		

function createButton(){
	$('#buttonBlock').empty();

	for(var i = 0; i < giphySelection.length; i++){
		$('#buttonBlock').append('<br>' + '<button>' + giphySelection[i] + '</button>' + '<br>');
	}
}


// $('#searchGiphy').on('click', function(event){
// 	event.preventDefault();

// 	var search = $('#term').val().trim();
// 	giphySelection.push(search);
// 	createButton();
// 	// $('#term').reset();
// });		


// createButton();