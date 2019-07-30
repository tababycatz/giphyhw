$("button").on("click", function () {

    var topics = ["mathematics", "biology", "physics", "chemistry", "psychology", "philosophy", "history", "english"];

    // Grabbing and storing the data-animal property value from the button
    var math = $(this).attr("data-math");
    var biology = $(this).attr("data-biology");
    var physics = $(this).attr("data-physics");
    var chemistry = $(this).attr("data-chemistry");
    var psychology = $(this).attr("data-psychology");
    var philosophy = $(this).attr("data-philosophy");
    var history = $(this).attr("data-history");
    var english = $(this).attr("data-english");

    // Constructing a queryURL using the subject name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        subjects + "&api_key=lP1MQYDLbYmyDynRQ563oVNiaQ4IkVFY";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            //loops through each result item//
            for (var a = 0; a < results.length; a++) {

                // create and store div tag//
                var subjectDiv = $("<div>");

                // create and store text with result item's rating//
                var text = $("<h4>").text("Rating: " + results[a].rating);

                //create and store img tag//
                var image = $("<img>");

                //sets src attr of img to property pulled off the result item//
                image.attr("src", resulst[a].images.fixed_height.url);

                //append text and img to the subjectDiv//
                subjectDiv.append(text);
                subjectDiv.append(image);

                //prepends new div to index for specified div//
                $(".gifbox").prepend(subjectDiv);
            }

            $("gifbox").on("click", function () {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");

                };


            });
        });
}); 