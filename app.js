var getResults = (query, callback) => {
  var url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${query}&format=json&prop=extracts&exsentences=4`;
  console.log(url);
    $.getJSON({'url': url}, callback);
}

var updateResults = (apiResult) => {
  results = apiResult['query']['search'].map((item) => { return item['title']; });
  $("#results").text(results.toString());
}

$(document).ready(() => {
    getResults("pie", updateResults);
});
