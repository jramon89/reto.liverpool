const host = process.env.HOST || 'localhost',
    host_db = process.env.HOST_DB || 'localhost',
    port = process.env.PORT || 4000,
    port_db = process.env.PORT_DB || 27017,
    pathdb = `mongodb://${host_db}:${port_db}/inventory`;

module.exports = {
	host,
	pathdb,
	port,
	routes: {
		cart: require('../routes/cart.routes'),
	}
};
//exports.routes = require('../routes/main.routes');