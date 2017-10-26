var giphySelection = [];

$('#searchGiphy').on('click', function(event){
	event.preventDefault();

	var search = $('#term').val().trim();
	giphySelection.push(search);
	createButton();

	createButton();
 	$('#term').val("")
});

function createButton(){
	$('#buttonBlock').empty();

	for(var i = 0; i < giphySelection.length; i++){
		$('#buttonBlock').append('<span>' + '<button id="gifyBtn" data-value="' + giphySelection[i] +'">' + giphySelection[i] + '</button>' + ' ' + '</span>');
	}
}

$("#buttonBlock").on("click", "#gifyBtn", function () {
	//this is the thing we clicked on
	console.log($(this));
	//get us our new spiffy data value and store it to a var
	var search = $(this).attr("data-value");
	console.log(search);
	console.log("i clicked a button");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=wCxsPXD0Qj0Pa8b0Mb0cNLhHd7a1gi0V&limit=10";
	console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
		var data = response.data;
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			var pic = $('<img>')

			pic.attr('src', data[i].images.fixed_height_still.url)

			//set the state of that picture (still/animated)
			pic.attr("data-state", "still")
			//store both animated and still urls to the img tag
			pic.attr("data-animated", data[i].images.fixed_height.url)
			pic.attr("data-still", data[i].images.fixed_height_still.url)
			pic.attr("id", "video")
			$('#giphyDisplay').prepend(pic)
		}
  });
  $('#giphyDisplay').html('')
})
	$("#giphyDisplay").on("click", "#video", function(){
		var state = $(this).attr("data-state");

		console.log("hey you clicked the video");
		if (state == "still") {
			$(this).attr("data-state", "animated");
			$(this).attr("src", $(this).attr("data-animated"));
		}else {
			$(this).attr("data-state", "still");
			$(this).attr("src", $(this).attr("data-still"));
		}
	})

