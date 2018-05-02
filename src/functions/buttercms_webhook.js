
var request = require('request');


exports.handler = function(event, context, callback) {

  console.log('Received %s request: ', event.httpMethod, event.body);

  // buttercms send webhook data as POST request
  if(event.httpMethod !== 'POST' || !event.body) {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  const payload = JSON.parse(event.body);
  if(payload.data.page_type !== 'product') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }
  
  request.post({
    url: 'https://app.snipcart.com/api/products',
    json: true,
    headers: {
      Authentication: 'Basic ' + (new Buffer(process.env.SNIPCART_API_KEY + ':', 'utf8').toString('base64')),
    },
    body: {
      fetchUrl: 'https://snipcart-buttercms-demo.netlify.com/.netlify/functions/snipcart_json_crawler',
    }
  }, function(err, res, body) {
    if(err) {
      console.log('Error from Snipcart crawler: ', err);
    } else {
      console.log('Response(%d) from Snipcart crawler: ', res.statusCode, body);
    }
    callback(null, {
      statusCode: 200,
      body: '',
    });
  });
}
