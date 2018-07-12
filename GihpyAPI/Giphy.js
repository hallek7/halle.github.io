
$(document).ready(function () {

    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
      var newTopic = $("#userInput").val().trim();
       
     var newBtn = $("<button>");
      newBtn.attr("data-animal", newTopic); 
     newBtn.text(newTopic);
     $("#buttonarea").append(newBtn);

    });

     $(document).on("click","button", function () {

        var animal = $(this).attr("data-animal");

        // Constructing a URL to search Giphy for the name of the animal who said the quot
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=FlrFMH8xKHQNU4qGyeizWTxATOhBXsnb";
        // Event listener for all button elements                      // FlrFMH8xKHQNU4qGyeizWTxATOhBXsnb
                                                                     
        console.log(queryURL);
            // Performing  AJAX GET request
            $.ajax({
                url: queryURL,
                method: "GET"
            })
                // After the data comes back from the API
                .then(function (response) {  // result we get back  // . then= promise 
                    // Storing an array of results in the results variable
                    var results = response.data;
                  
                    // Looping over every result item
                    for (var i = 0; i < results.length; i++) {

                        // Only taking action if the photo has an appropriate rating
                        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                            // Creating a div with the class "item"
                            var gifDiv = $("<div class='item'>");

                            // Storing the result item's rating
                            var rating = results[i].rating;

                            // Creating a paragraph tag with the result item's rating
                            var p = $("<p>").text("Rating: " + rating);

                            // Creating an image tag
                            var animalImage = $("<img>");

                            // Giving the image tag an src attribute of a proprty pulled off the
                            // result item
                            animalImage.attr("src", results[i].images.fixed_height.url);

                            // Appending the paragraph and personImage we created to the "gifDiv" div we created
                            gifDiv.append(p);
                            gifDiv.append(animalImage);

                            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                            $("#gifs-appear-here").append(gifDiv);
                        }
                    }
                    
                });
        });
    });
