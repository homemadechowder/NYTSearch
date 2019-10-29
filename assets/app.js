$("#search").on("click", function () {

    event.preventDefault();

    var searchTerm = $("#searchTerm").val().trim();
    // var count = 5;
    // console.log($("#recordsRetreieve option:selected".text()));
    var count = $("#recordsRetrieve").val();
    var startYear = $("#startYear").val().trim();
    var endYear = $("#endYear").val().trim();

    var queryURL;

    if (startYear === "" && endYear === "") {
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=EzFv4pFaLMNlVTTgSTtW5w8pCLGc7YvK";
    } else if (startYear !== "" && endYear === "") {
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" +startYear + "&api-key=EzFv4pFaLMNlVTTgSTtW5w8pCLGc7YvK";
    } else if (startYear === "" && endYear !=="") { 
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&end_date=" + endYear + "&api-key=EzFv4pFaLMNlVTTgSTtW5w8pCLGc7YvK";
    } else  {
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&end_date=" + endYear + "&begin_date=" + startYear + "&api-key=EzFv4pFaLMNlVTTgSTtW5w8pCLGc7YvK";
    }
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (results) {
        console.log(results)
        var articleArray = results.response.docs

        $("#topArticles").empty()

        for (var i = 0; i < count; i++){
            var headline = articleArray[i].headline.main;
            var url = articleArray[i].web_url;
            var abstract = articleArray[i].abstract;
            var author = articleArray[i].byline.original;

            $("#topArticles").append("<h1>" + headline + "</h1>").append("<hr>").append("<a href=" + url + ">" + url + "</a>").append("<p>" + abstract + "</p>").append("<p>" + author + "</p>");
            
        }

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