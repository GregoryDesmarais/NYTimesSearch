var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="


// This is the basic buildout of the API URL call
if (searchTerm) {
  queryURL = urlBase + searchTerm;
} else {
  alert("Field must be filled out");
}

if (recordNumber) {
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

