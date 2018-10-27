class Tweet {
    constructor(tweet_text, tweet_time) {
        this.text = tweet_text;
        this.time = new Date(tweet_time); //, "ddd MMM D HH:mm:ss Z YYYY"
    }
    //returns either 'live_event', 'achievement', 'completed_event', or 'miscellaneous'
    get source() {
        if (this.text.startsWith("Achieved"))
            return "achievement";
        else if (this.text.startsWith("Just completed"))
            return "completed_event";
        else if (this.text.startsWith("Just posted"))
            return "completed_event";
        else if (this.text.startsWith("Watch"))
            return "live_event";
        else
            return "miscellaenous";
    }
    //returns a boolean, whether the text includes any content written by the person tweeting.
    get written() {
        if (this.text.includes("-"))
            return true;
        else
            return false;
    }
    get writtenText() {
        if (!this.written) {
            return "";
        }
        //TODO: parse the written text from the tweet
        return "";
    }
    get activityType() {
        if (this.source != 'completed_event' && this.source != 'posted_event') {
            return "unknown";
        }
        else if (this.text.includes("run"))
            return "run";
        else if (this.text.includes("walk"))
            return "walk";
        else if (this.text.includes("mtn bike"))
            return "mtn bike";
        else if (this.text.includes("row"))
            return "row";
        else if (this.text.includes("bike"))
            return "bike";
        else if (this.text.includes("hike"))
            return "hike";
        else if (this.text.includes("swim"))
            return "swim";
        else
            return "unknown";
    }
    get distance() {
        if (this.source != 'completed_event') {
            return 0;
        }
        //TODO: prase the distance from the text of the tweet
        return 0;
    }
    //    getHTMLTableRow(rowNumber) {
    getHTMLTableRow() {
        //TODO: return a table row which summarizes the tweet with a clickable link to the RunKeeper activity
        //return "<tr></tr>";
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return this.text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    }
}
