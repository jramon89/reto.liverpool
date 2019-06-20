const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/products.controller');

router.route('/products')
    .get(controllers.getProducts);
router.route('/products/add')
    .post(controllers.setProducts);
router.route('/products/delete')
    .post(controllers.removeProducts);
router.route('/products/update')
    .post(controllers.updateProducts);


module.exports = router;
