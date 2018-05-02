
var butter = require('buttercms')("e155d849518412ee7787af8cf61bb67840ee8c8e");

exports.handler = function(event, context, callback) {

  // snipcart send a GET request when crawling products
  if(event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }
  
  // list products the same way we do on the website
  butter.page.list('product')
    .then((res) => {
      var products = res.data.data.map((product) => {
      	return {
      		id: product.fields.product_id,
          name: product.fields.name,
      		price: product.fields.price,
          description: product.fields.description,
          image: product.fields.image,
          url: 'https://snipcart-buttercms-demo.netlify.com/.netlify/functions/snipcart_json_crawler',
      	};
      });

      callback(null, {
      	statusCode: 200,
      	headers: {
      		"Content-Type": "application/json"
      	},
      	body: JSON.stringify(products),
      });
    }); // we would normally handle errors right? ;)
}
