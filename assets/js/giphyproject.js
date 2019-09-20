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
    $("#add-gifs").on("click", function () {
        var gif = $("#giphy-input").val().trim();
        topic.push(gif);

        renderButtons();
    });
}


function getGifs(gif) {
    var gif = $(this).attr("data-name");
    var queryURL = "api.giphy.com/v1/gifs/search?q=" + gif + "&apikey=YAVt4z2t61wPd1oqatWrOZlv0pgRNXke=10";

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
                gifDiv.append(ratingP);
                gifDiv.append(image);
                $("#giphyArea").prepend(gifDiv);
            }

        })
}

renderButtons();
newButton();

$(document).on("click", ".gif", getGifs)
  