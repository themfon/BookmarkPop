const Twit = require("twit");
require('dotenv').config()

var T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000  // optional HTTP request timeout to apply to all requests.
});

function thirtyminsago(){
    var MS_PER_MINUTE = 60000;
    var myEndDateTime = new Date();
    var durationInMinutes = 30;
    var myStartDate = new Date(myEndDateTime - durationInMinutes * MS_PER_MINUTE);

    const unixTimestamp = Math.floor(myStartDate.getTime() / 1000);
    return unixTimestamp; 
}

function tweetResult(err, data, response) {
    var tweetMsgs = data.statuses;
    for (let i = 1; i <= tweetMsgs.length; i++) {
        // Do something with the tweets
        // let conversation_id = tweetMsgs[i].conversation_id;
        // let author_id = tweetMsgs[i].user.id;
        console.log('-------------------')
        console.log(tweetMsgs[i])
    }
  }

var params = {
    q: `@twitter since_time:${thirtyminsago()}`,
    count: 10
  };

try {
    T.get('search/tweets', params, tweetResult);
} catch (error) {
    console.log(error)
}