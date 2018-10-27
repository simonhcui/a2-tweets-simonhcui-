function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}


	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
//window.alert("test");

  var a, b, c, d, i, j;
  var dictionary = {};
  var totaldis = {};
  Object.keys(tweet_array).forEach(function(key) 
  {
  
//  window.alert("aaa");
    if ( tweet_array[key].activityType != "unknown" )
    {
        a = tweet_array[key].text.substring(17);
        i = a.indexOf(tweet_array[key].activityType);
        b = a.substring(0, i-1);
        j = b.indexOf(" ");
        c = b.substring(0, j);
        d = b.substring(j+1);
        if ( d == "mi")
        {
          c= Number(c) *1.609;
        }
      if ( tweet_array[key].activityType in dictionary )
      {
        dictionary[tweet_array[key].activityType] =
        dictionary[tweet_array[key].activityType] + 1;
        totaldis[tweet_array[key].activityType] = 
        totaldis[tweet_array[key].activityType] + Number(c);
      }
      else
      {
        dictionary[tweet_array[key].activityType] = 0;
        totaldis[tweet_array[key].activityType] = Number(c);
      }
    }

    
  });

  
  for (var key in totaldis)  
  {
  //alert(key);
    totaldis[key] = totaldis[key]/dictionary[key];
  }
  
 
  $('#numberActivities').text(Object.keys(dictionary).length);

    var ta = [];
    for (var key in dictionary) ta.push([key, dictionary[key]]);
    ta.sort(function (a, b) { return a[1] - b[1] });
    
  $('#firstMost').text(ta[ta.length-1][0]);
  $('#secondMost').text(ta[ta.length-2][0]);
  $('#thirdMost').text(ta[ta.length-3][0]);

    var ta1 = [];
    for (var key in totaldis) ta1.push([key, totaldis[key]]);
    ta1.sort(function (a, b) { return a[1] - b[1] });

  var e = Number(ta1[ta1.length-1][1]);
  e = e * 100;
  e = Math.round(e);
  e = e /100;
  
  $('#longestActivityType').text(e + " km");

  var e = Number(ta1[0][1]);
  e = e * 100;
  e = Math.round(e);
  e = e /100;

  $('#shortestActivityType').text(e + " km");
  $('#weekdayOrWeekendLonger').text(ta1[ta1.length-1][0]);
    
//window.alert(ta[ta.length-1][0]);
  var weekday = new Array(7);
  weekday[0] =  "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var sfirst = ta[ta.length-1][0];
  var vfirst = [];
  var vfirst_num = [];
  Object.keys(tweet_array).forEach(function(key) 
  {
      if ( tweet_array[key].activityType == sfirst )
      {
//        alert(tweet_array[key].time);
//        alert(weekday[tweet_array[key].time.getDay()]);
        //alert(tweet_array[key].text);
        a = tweet_array[key].text.substring(17);
        i = a.indexOf(tweet_array[key].activityType);
        b = a.substring(0, i-1);
        j = b.indexOf(" ");
        c = b.substring(0, j);
        d = b.substring(j+1);
        if ( d == "mi")
        {
          c= Number(c) *1.609;
        }
        //alert(c);
      if ( weekday[tweet_array[key].time.getDay()] in vfirst )
      {
        vfirst[weekday[tweet_array[key].time.getDay()]] =
          vfirst[weekday[tweet_array[key].time.getDay()]] + Number(c);
        vfirst_num[weekday[tweet_array[key].time.getDay()]] =
          vfirst_num[weekday[tweet_array[key].time.getDay()]] + 1;
      }
      else
      {
        //alert("test");
        vfirst[weekday[tweet_array[key].time.getDay()]] = Number(c);
        vfirst_num[weekday[tweet_array[key].time.getDay()]] = 1;
      }

      }
  });
  var ssecond = ta[ta.length-2][0];
  var vsecond = [];
  var vsecond_num = [];
  Object.keys(tweet_array).forEach(function(key) 
  {
      if ( tweet_array[key].activityType == ssecond )
      {
//        alert(tweet_array[key].time);
//        alert(weekday[tweet_array[key].time.getDay()]);
        //alert(tweet_array[key].text);
        a = tweet_array[key].text.substring(17);
        i = a.indexOf(tweet_array[key].activityType);
        b = a.substring(0, i-1);
        j = b.indexOf(" ");
        c = b.substring(0, j);
        d = b.substring(j+1);
        if ( d == "mi")
        {
          c= Number(c) *1.609;
        }
        //alert(c);
      if ( weekday[tweet_array[key].time.getDay()] in vsecond )
      {
        vsecond[weekday[tweet_array[key].time.getDay()]] =
          vsecond[weekday[tweet_array[key].time.getDay()]] + Number(c);
        vsecond_num[weekday[tweet_array[key].time.getDay()]] =
          vsecond_num[weekday[tweet_array[key].time.getDay()]] + 1;
      }
      else
      {
        //alert("test");
        vsecond[weekday[tweet_array[key].time.getDay()]] = Number(c);
        vsecond_num[weekday[tweet_array[key].time.getDay()]] = 1;
      }

      }
  });

  var sthird = ta[ta.length-3][0];
  var vthird  = [];
  var vthird_num = [];
  Object.keys(tweet_array).forEach(function(key) 
  {
      if ( tweet_array[key].activityType == sthird )
      {
//        alert(tweet_array[key].time);
//        alert(weekday[tweet_array[key].time.getDay()]);
        //alert(tweet_array[key].text);
        a = tweet_array[key].text.substring(17);
        i = a.indexOf(tweet_array[key].activityType);
        b = a.substring(0, i-1);
        j = b.indexOf(" ");
        c = b.substring(0, j);
        d = b.substring(j+1);
        if ( d == "mi")
        {
          c= Number(c) *1.609;
        }
        //alert(c);
      if ( weekday[tweet_array[key].time.getDay()] in vthird )
      {
        vthird[weekday[tweet_array[key].time.getDay()]] =
          vthird[weekday[tweet_array[key].time.getDay()]] + Number(c);
        vthird_num[weekday[tweet_array[key].time.getDay()]] =
          vthird_num[weekday[tweet_array[key].time.getDay()]] + 1;
      }
      else
      {
        //alert("test");
        vthird[weekday[tweet_array[key].time.getDay()]] = Number(c);
        vthird_num[weekday[tweet_array[key].time.getDay()]] = 1;
      }

      }
  });

        //alert(Object.keys(vfirst).length);
  var myarray3 = [];
  var h3;

  var myarray4 = [];
  var h4;

    for (var key in vfirst)
    {
        h3 = {};
        h3["time(day)"] = key;
        h3["Mean of distance"] = vfirst[key]/vfirst_num[key];
        h3["type"] = sfirst;
        myarray3.push(h3);
        h4 = {};
        h4["time(day)"] = key;
        h4["distance"] = vfirst[key];
        h4["type"] = sfirst;
        myarray4.push(h4);
    }

    for (var key in vsecond)
    {
        h3 = {};
        h3["time(day)"] = key;
        h3["Mean of distance"] = vsecond[key]/vsecond_num[key];
        h3["type"] = ssecond;
        myarray3.push(h3);
        h4 = {};
        h4["time(day)"] = key;
        h4["distance"] = vsecond[key];
        h4["type"] = ssecond;
        myarray4.push(h4);
    }

    for (var key in vthird)
    {
        h3 = {};
        h3["time(day)"] = key;
        h3["Mean of distance"] = vthird[key]/vthird_num[key];
        h3["type"] = sthird;
        myarray3.push(h3);
        h4 = {};
        h4["time(day)"] = key;
        h4["distance"] = vthird[key];
        h4["type"] = sthird;
        myarray4.push(h4);
    }

/*
  for (var key1 in totaldis)  
  {
    var sk = key1;
    var vk = [];
    Object.keys(tweet_array).forEach(function(key) 
    {
      if ( tweet_array[key].activityType == sk )
      {
        a = tweet_array[key].text.substring(17);
        i = a.indexOf(tweet_array[key].activityType);
        b = a.substring(0, i-1);
        j = b.indexOf(" ");
        c = b.substring(0, j);
        d = b.substring(j+1);
        if ( d == "mi")
        {
          c= Number(c) *1.609;
        }
        if ( weekday[tweet_array[key].time.getDay()] in vk )
        {
          vk[weekday[tweet_array[key].time.getDay()]] =
            vk[weekday[tweet_array[key].time.getDay()]] + Number(c);
        }
        else
        {
          //alert("test");
          vk[weekday[tweet_array[key].time.getDay()]] = Number(c);
        }
      }
    });
    
    for (var key in vk)
    {
      h4 = {};
      h4["time(day)"] = key;
      h4["distance"] = vk[key];
      h4["type"] = key1;
      myarray4.push(h4);
    }

  }
*/

  var myarray2 = [];
  var h2;

  for (var key in dictionary)
  {
    h2 = {};
    h2["Type of Activities"] = key;
    h2["Number of Activities"] = dictionary[key];
    myarray2.push(h2);
  }

  
	activity_vis_spec = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    //"values": tweet_array
//	    "values": myarray2
	    "values": myarray2
	  },
	  //TODO: Add mark and encoding
	  "mark": "bar",
  "encoding": {
    "x": {"field": "Type of Activities", "type": "nominal"},
    "y": {"field": "Number of Activities", "type": "quantitative"}
  }
	};
//	vegaEmbed('#activityVis', activity_vis_spec, {actions:false});
	vegaEmbed('#activityVis', activity_vis_spec, {actions:false});


var isEven  = function(x) { return !( x & 1 ); };

 $( "#aggregate" ).click(function() {
//    e.stopPropagation();
//  alert( "Handler for .click() called." );
//  alert( $('#aggregate').text())
    var checkit = window.check_var;
    if(checkit === undefined){
        window.check_var = 1;
    }
    else {
        window.check_var = + window.check_var + 1;
    }
//    alert(window.liveTweets);


    if ( window.liveTweets == true )
    {
//        alert(window.check_var);
        if ( !isEven(window.check_var) )
        {
            return;
        }
    }

//  setTimeout(function(){}, 2000);
  if ($('#aggregate').text() == "Show means")
  {
    $('#aggregate').html("Show all activities");
    $('#distanceVisAggregated').text("");

  
	activity_vis_spec = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    //"values": tweet_array
	    "values": myarray3
	  },
	  //TODO: Add mark and encoding
	  "mark": "point",
  "encoding": {
    "x": {"field": "time(day)", "type": "nominal"},
    "y": {"field": "Mean of distance", "type": "quantitative"},
    "color": {"field": "type", "type": "nominal"},
  }
	};
	vegaEmbed('#distanceVis', activity_vis_spec, {actions:false});
//alert("First");
   }
  else
  {
    $('#aggregate').html("Show means");
    $('#distanceVis').text("");
	activity_vis_spec = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    //"values": tweet_array
	    "values": myarray4
	  },
	  //TODO: Add mark and encoding
	  "mark": "point",
  "encoding": {
    "x": {"field": "time(day)", "type": "nominal"},
    "y": {"field": "distance", "type": "quantitative"},
    "color": {"field": "type", "type": "nominal"},
  }
	};
	vegaEmbed('#distanceVisAggregated', activity_vis_spec, {actions:false});
//alert("Second");

   }
}); 


	//TODO: create the visualizations which group the three most-tweeted activities by the day of the week.
	//Use those visualizations to answer the questions about which activities tended to be longest and when.
}

//Wait for the DOM to load

$(document).ready(function() {
	loadSavedRunkeeperTweets().then(parseTweets);
});