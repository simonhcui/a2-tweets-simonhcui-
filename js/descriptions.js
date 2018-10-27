function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}

	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});

	addEventHandlerForSearch(tweet_array);

	//TODO: Filter to just the written tweets
}

function addEventHandlerForSearch(tweet_array) {
	//TODO: Search the written tweets as text is entered into the search box, and add them to the table
	table = document.getElementById("tweetTable");
	var row, cell, cellText;
	var cell1, cell2, cell3;
	var num_of_tweets;
  $('#searchCount').text(0);
  $('#searchText').text("");

	var $input = $('#textFilter');
  $input.on('keydown', function () {
	  num_of_tweets = 0;
    setTimeout(function () {
      
      tosearch = $input.val();
      $("#tweetTable tr").remove(); 
    Object.keys(tweet_array).forEach(function(key) 
    {
        var a = JSON.stringify(tweet_array[key].text);
        //window.alert(a);
      if ( tweet_array[key].written ) 
//        if (a.includes("-") ) 
        {
          if (a.includes(tosearch) ) 
          {
            row = table.insertRow(num_of_tweets);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            num_of_tweets = num_of_tweets + 1;
            cell1.innerHTML = num_of_tweets;
            cell2.innerHTML = tweet_array[key].source;
            cell3.innerHTML = tweet_array[key].getHTMLTableRow();
  /*          cell = document.createElement("td");
            cellText = document.createTextNode(num_of_tweets);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(tweet_array[key].source);
            cell.appendChild(cellText);
            row.appendChild(cell);
          //	window.alert("test");
            cell = document.createElement("td");
            cellText = document.createTextNode(tweet_array[key].getHTMLTableRow());
            cell.appendChild(cellText);
            row.appendChild(cell);
            table.appendChild(row); */
          }
        }

    });
//    window.alert(num_of_tweets);
//    document.getElementById("searchCount").innerHTML = "test";
    $('#searchCount').text(num_of_tweets);
    $('#searchText').text($input.val());
      
    }, 0);
    //document.getElementById("searchCount").innerHTML = "test";
  //  window.alert(num_of_tweets);
  });


//	window.alert(table.length);
/*	row = document.createElement("tr");
	cell = document.createElement("td");
	cellText = document.createTextNode(1);
	cell.appendChild(cellText);
  row.appendChild(cell);
	cell = document.createElement("td");
	cellText = document.createTextNode("completed_event");
	cell.appendChild(cellText);
  row.appendChild(cell);
//	window.alert("test");
	cell = document.createElement("td");
	cellText = document.createTextNode("event text");
	cell.appendChild(cellText);
  row.appendChild(cell);
	table.appendChild(row); */
}

//Wait for the DOM to load
$(document).ready(function() {
//	addEventHandlerForSearch();
	loadSavedRunkeeperTweets().then(parseTweets);
});