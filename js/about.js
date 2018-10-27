function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}

	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	
	/*
	$('#numberTweets').text(tweet_array.length);
	//TODO: remove these
	$('#firstDate').text(earliest_tweet.time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
	$('#lastDate').text(latest_tweet.time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
*/

	
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var a0 = JSON.stringify(runkeeper_tweets[0].created_at);
//  window.alert(a0);
  var olddate = new Date(a0);
  var newdate = new Date(a0);
//  window.alert( olddate.toLocaleDateString('en-US', options));
  Object.keys(runkeeper_tweets).forEach(function(key) 
  {
      var a = JSON.stringify(runkeeper_tweets[key].created_at);
      var tdate = new Date(a);
      if ( tdate < olddate)
      {
        olddate = tdate;
      }
      if ( tdate > newdate)
      {
        newdate = tdate;
      }
      
  });

//  window.alert(olddate);
	
  var completedcount = 0;
  var Achievedcount = 0;
  var Watchcount = 0;
  var misccount = 0;
  var totalcount = 0;
  var writtencount = 0;

  Object.keys(tweet_array).forEach(function(key) 
  {
    var a = JSON.stringify(tweet_array[key].text);
    totalcount = totalcount + 1;
    if ( tweet_array[key].source == "completed_event") 
    {
      completedcount = completedcount + 1;
      if ( tweet_array[key].written ) 
      {
          writtencount = writtencount + 1;
      }
    }
    if ( tweet_array[key].source == "achievement") 
    {
        Achievedcount = Achievedcount + 1;
    }
    if ( tweet_array[key].source == "live_event") 
    {
        Watchcount = Watchcount + 1;
    }
    if ( tweet_array[key].source != "completed_event") 
    {
      if ( tweet_array[key].source != "achievement") 
      {
        if ( tweet_array[key].source != "live_event") 
        {
            misccount = misccount + 1;
        }
      }
    }
  });



  var completedEventsPct = completedcount/totalcount;
  completedEventsPct = completedEventsPct * 10000;
  completedEventsPct = Math.round(completedEventsPct);
  completedEventsPct = completedEventsPct/ 100;

  var AchievedEventsPct = Achievedcount/totalcount;
  AchievedEventsPct = AchievedEventsPct * 10000;
  AchievedEventsPct = Math.round(AchievedEventsPct);
  AchievedEventsPct = AchievedEventsPct/ 100;

  var WatchEventsPct = Watchcount/totalcount;
  WatchEventsPct = WatchEventsPct * 10000;
  WatchEventsPct = Math.round(WatchEventsPct);
  WatchEventsPct = WatchEventsPct/ 100;

  var miscventsPct = misccount/totalcount;
  miscventsPct = miscventsPct * 10000;
  miscventsPct = Math.round(miscventsPct);
  miscventsPct = miscventsPct/ 100;

  var writtenventsPct = writtencount/completedcount;
  writtenventsPct = writtenventsPct * 10000;
  writtenventsPct = Math.round(writtenventsPct);
  writtenventsPct = writtenventsPct/ 100;

//  window.alert(completedEventsPct);
  
  var scompletedEventsPct = completedEventsPct + "%";
  var sAchievedEventsPct = AchievedEventsPct + "%";
  var sWatchEventsPct = WatchEventsPct + "%";
  var smiscventsPct = miscventsPct + "%";
//  window.alert(scompletedEventsPct);
	
  var numberTweets = Object.keys(runkeeper_tweets).length;

  document.getElementById("firstDate").innerHTML = olddate.toLocaleDateString('en-US', options);
//  document.getElementById("firstDate").innerHTML = oldevent.toLocaleDateString('en-US', options);
  document.getElementById("lastDate").innerHTML = newdate.toLocaleDateString('en-US', options);
//  document.getElementById("lastDate").innerHTML = event.toLocaleDateString('en-US', options);

//    $('#numberTweets').text(numberTweets);
    $('#numberTweets').text(totalcount);

    document.getElementsByClassName("completedEvents")[0].innerHTML = completedcount;
    document.getElementsByClassName("completedEvents")[1].innerHTML = completedcount;
    document.getElementsByClassName("completedEventsPct")[0].innerHTML = scompletedEventsPct;
    document.getElementsByClassName("liveEvents")[0].innerHTML = Watchcount;
    document.getElementsByClassName("liveEventsPct")[0].innerHTML = sWatchEventsPct;
    document.getElementsByClassName("achievements")[0].innerHTML = Achievedcount;
    document.getElementsByClassName("achievementsPct")[0].innerHTML = sAchievedEventsPct;
    document.getElementsByClassName("miscellaneous")[0].innerHTML = misccount;
    document.getElementsByClassName("miscellaneousPct")[0].innerHTML = smiscventsPct;
    document.getElementsByClassName("written")[0].innerHTML = writtencount;
    document.getElementsByClassName("writtenPct")[0].innerHTML = writtenventsPct;
}

//Wait for the DOM to load
$(document).ready(function() {
	loadSavedRunkeeperTweets().then(parseTweets);
});

