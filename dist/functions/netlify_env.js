
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = function(event, context, callback) {

  callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      event,
      context,
      env: Object.assign({}, process.env, {
        debug_conf_key: process.env.DEBUG_CONF_KEY
      })
    })
  });
}
