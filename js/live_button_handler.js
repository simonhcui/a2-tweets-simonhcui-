$(document).ready(function() {
	//Function-scope boolean to alter as the button switches state
	var liveTweets = false;

	//TODO: use jQuery to listen for a click event,
	//toggle the button text between "Switch to live tweets" and "Switch to saved tweets", 
	//and load the corresponding tweets
	$( "#liveButton" ).click(function() {
        if ($('#liveButton').text() == "Switch to live tweets")
        {
            window.liveTweets = true;
            $('#liveButton').html("Switch to saved tweets");
            loadLiveRunkeeperTweets().then(parseTweets);
        }
        else
        {
            window.liveTweets = false;
            $('#liveButton').html("Switch to live tweets");
            loadSavedRunkeeperTweets().then(parseTweets);
        }
        $('#distanceVis').text("");
        $('#distanceVisAggregated').text("");

    });
});
