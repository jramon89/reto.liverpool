const mongoose = require('mongoose'),
    productSchema = mongoose.Schema({
        name: String,
        image: String,
        price: {},
        id_prod: Number
    });

exports.productModel = mongoose.model('products', productSchema);

exports.productData = [{
   "name": "Laptop Asus tp500l Transformer Book",
    "price": 21000.00,
    "image": "",
    "id_prod": 1
}, {
    "name": "Celular Xiaomi Redmi A4",
    "price": 3000.00,
    "image": "",
    "id_prod": 2
}, {
    "name": "Pantalla Samsung Smart TV 32p HD",
    "price":5500.00,
    "image": "",
    "id_prod": 3

}];