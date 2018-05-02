
var butter = require('buttercms')("e155d849518412ee7787af8cf61bb67840ee8c8e");

exports.handler = function(event, context, callback) {

  // snipcart send a GET request when crawling products
  if(event.httpMethod !== 'GET') {
    callback(null, {
      statusCode: 200,
      body: ''
    });
  }
  
  butter.page.list('product')
    .then((res) => {
      var products = res.data.data.map((product) => {
      	return {
      		id: product.fields.product_id,
      		price: product.fields.price,
      	};
      });

      callback(null, {
      	statusCode: 200,
      	headers: {
      		"Content-Type": "application/json"
      	},
      	body: JSON.stringify(products),
      });
    });
}
