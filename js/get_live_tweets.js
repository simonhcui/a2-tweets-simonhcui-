function loadLiveRunkeeperTweets() {
	return new Promise(function(resolve, reject) {
//		resolve(undefined);
        $.getJSON("http://localhost:7890/1.1/search/tweets.json?q=%23RunKeeper&count=100", 
            function( data )
        {
            RUNKEEPER_TWEETS = new Array();
            for (var i in data.statuses)
            {
                var item = data.statuses[i];   
                if (data.statuses[i].lang == "en" )
                {
                    RUNKEEPER_TWEETS.push({
                        "created_at" : item.created_at,
                        "text" : item.text
                    });
                }
            }
            resolve(RUNKEEPER_TWEETS);
        });
	});
}