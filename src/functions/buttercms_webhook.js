
var https = require('https');


exports.handler = function(event, context, callback) {

  // buttercms send webhook data as POST request
  if(event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  const data = JSON.parse(event.body);
  
}
