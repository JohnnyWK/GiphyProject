// YAVt4z2t61wPd1oqatWrOZlv0pgRNXke !!!API KEY!!!

// api.giphy.com/v1/gifs/search?
// $document.ready(function(){

var gifs = ["dogs", "cats", "skateboarding", "Prince"];



function renderButtons() {
    $("#buttonArea").empty();
    for (var i = 0; i < gifs.length; i++) {
        var b = $("<button>");
        b.addClass("giphy");
        b.addClass("btn btn-secondary");
        b.attr("data-name", gifs[i]);
        b.text(gifs[i]);
        $("#buttonArea").append(b);
    }
}

function newButton() {
    $("#add-gifs").on("click", function (event) {
        event.preventDefault();
        var gif = $("#giphy-input").val().trim();
        gifs.push(gif);
        renderButtons();
    });
}


function getGifs() {
    var gif = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=YAVt4z2t61wPd1oqatWrOZlv0pgRNXke";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            $("#giphyArea")
            var results = response.data;
           
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                gifDiv.attr("class", "gifsDiv");
                var ratingP = $("<p>");
                ratingP.text("Rating:" + results[i].rating);
                var image = $("<img>");
                image.attr(results[i].images.preview);
                gifDiv.append(ratingP);
                gifDiv.append(image);
                $("#giphyArea").prepend(gifDiv);
            }
            console.log(results)
        })
}

renderButtons();
newButton();

$(document).on("click", ".giphy", getGifs)
  