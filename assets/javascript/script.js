$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var math = $(this).attr("data-math");
    var biology = $(this).attr("data-biology");
    var physics = $(this).attr("data-physics");
    var chemistry = $(this).attr("data-chemistry");
    var psychology = $(this).attr("data-psychology");
    var philosophy = $(this).attr("data-philosophy");
    var history = $(this).attr("data-history");
    var english = $(this).attr("data-english");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=lP1MQYDLbYmyDynRQ563oVNiaQ4IkVFY";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

      });

    
      });

var topics = ["mathematics", "biology", "physics", "chemistry", "psychology", "philosophy", "history", "english"] ;
      