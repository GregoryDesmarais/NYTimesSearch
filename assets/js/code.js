var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=uZzKTkg7AVqi3Noss7jYB0x8haAR4dUd&q=";

// pull values from the form after submit is hit.
var searchTerm = $("#query").val();
var recordNumber = $("#records").val();
var startYr = $("#sYear").val();
var endYr = $("#eYear").val();

// This is the basic buildout of the API URL call
if (searchTerm) {
  queryURL = urlBase + searchTerm;
} else {
  alert("Field must be filled out");
}

if (recordNumber) {

  // how many records were requested
  if (recordNumber > 10){

    var numberOfPages = Math.ceil( recordNumber / 10); // round up to the next whole number

    for ( i = 0; i < numberOfPages; i++){



      
    }
  }



  queryURL += "&" + recordNumber
} else {
  alert("Field must be filled out");
}

if (startYr) {
  queryURL += "&" + startYr;
}

if (endYr) {
  queryURL += "&" + endYr;
}

