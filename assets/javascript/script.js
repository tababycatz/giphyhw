$("button").on("click", function () {

    var topics = ["mathematics", "biology", "physics", "chemistry"];

    // Grabbing and storing the data-animal property value from the button
    var math = $(this).attr("data-math");
    var biology = $(this).attr("data-biology");
    var physics = $(this).attr("data-physics");
    var chemistry = $(this).attr("data-chemistry");

    $("button").on("click", function() {
        // Grabbing and storing the data-animal property value from the button
        var subject = $(this).attr("data-subject");

    // Constructing a queryURL using the subject name
    var queryURL = "https://api.giphy.com/vanimal1/gifs/search?q=" +
        subject + "&api_key=lP1MQYDLbYmyDynRQ563oVNiaQ4IkVFY";
    });

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    console.log("works!")
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
                image.attr("src", results[a].images.fixed_height.url);

                //append text and img to the subjectDiv//
                subjectDiv.append(text);
                subjectDiv.append(image);

                //prepends new div to index for specified div//
                $("#btnDump").prepend(subjectDiv);
            }

            $(".gifbox").on("click", function () {
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
    // Function for displaying movie data
    function makeBtn() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
        $(".gifbox").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

            var b = $("<button>");
            b.addClass("");
            // Adding a data-attribute
            b.attr("data-subject", topics[i]);
            // Providing the initial button text
            b.text(topics[i]);
            // Adding the button to the HTML
            $(".gifbox").append(b);
        }
    }


    $("#gif-input2").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var subbie = $("#gif-input").val().trim();

        // Adding the movie from the textbox to our array
        topics.push(subbie);

        // Calling renderButtons which handles the processing of our movie array
        makeBtn();

      });



    
    }); 