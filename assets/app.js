console.log("hello")

$("#search").on("click", function () {

    event.preventDefault();

    console.log("cat")
    var searchTerm = $("#searchTerm").val().trim()
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=EzFv4pFaLMNlVTTgSTtW5w8pCLGc7YvK";
    // console.log($("#recordsRetreieve option:selected".text()));

var count = 5; // currently hard coded as 5, but in future is 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (results) {
        var articleArray = results.response.docs

        // for loop for each element of array
        // count times 
        // do something count times --> 
        // variables for title, 

        //generate divs ...
        //append all to top articles
        //empty div top articles 
        // $("#topArticles").append()
    })

  

})