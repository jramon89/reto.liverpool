const products = require('./products');

module.exports = {
	posts: {
		model: products.productModel,
		data:  products.productData
	}
};