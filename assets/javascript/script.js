$(document).ready(function () {


    var topics = ["cat", "mouse", "dog", "hamster"];

    // Function for displaying Gif data
    function makeBtn() {
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
        $("#btnDump").empty();
        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
            var b = $("<button>");
            b.addClass("gifButton");
            // Adding a data-attribute
            b.attr("data-subject", topics[i]);
            // Providing the initial button text
            b.text(topics[i]);
            // Adding the button to the HTML
            $("#btnDump").append(b);
        }
    }
    makeBtn()



    $(document).on("click", ".gifButton", function () {
        // Grabbing and storing the data-subject property value from the button
        var newGif = $(this).attr("data-subject");
        // Constructing a queryURL using the subject name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newGif + "&api_key=lP1MQYDLbYmyDynRQ563oVNiaQ4IkVFY";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
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
                image.attr("src", results[a].images.fixed_height_still.url);
                image.attr("src", results[a].images.fixed_height.url);
                image.attr("data-state", "still");


                
                //append text and img to the subjectDiv//
                subjectDiv.append(text);
                subjectDiv.append(image);
                //prepends new div to index for specified div//
                $("#gifbox").prepend(subjectDiv);
            }

            $(".gifButton").on("click", function () {
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

    $("#gif-input").on("click", function (event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        console.log("I was clicked")
        // This line grabs the input from the textbox
        var subbie = $("#gif-input").val().trim();

        // Adding the new input from the textbox to our array
        topics.push(subbie);

        makeBtn();

    });

    // displays gifs
    $(document).on('click', ".gif", displayGifs);


    //call on renderbuttons fucntion
    makeBtn();

})