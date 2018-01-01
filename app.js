var getResults = (query, callback) => {
  var url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cinfo&list=search&titles=pie&exsentences=4&inprop=url&srsearch=${query}`;
  console.log(url);
    $.getJSON({'url': url}, callback);
}

var updateResults = (apiResult) => {
  console.log(apiResult);
  results = apiResult['query']['search'];
  $("#results").empty();
  for(result of results) {
    appendEntry(result['title'], result['snippet']);
  }
}

var appendEntry = (title, excerpt) => {
  $("#results").append(
    `<div class="result">
      <h3>
      ${title}
      </h3>
      <p>
      ${excerpt}
      </p>
    </div>`
);
}

$(document).ready(() => {
    $("#search-input").keyup((event) => {
      if(event.keyCode === 13) {
        var searchTerm = $("#search-input").val()
        console.log(searchTerm)
        getResults(searchTerm, updateResults);
      }
    });
});
