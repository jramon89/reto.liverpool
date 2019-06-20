const mongoose = require('mongoose'),
    productsData = require('../models/products');


/*
only for local storage
const cart = [];
const save =  [];
const products = [];
*/
const productsController = {

    getProducts: function(req, res) {
        productsData.productModel.find({}, function(err, data){
            res.send(data);
        });
    },
    setProducts: function (req, res) {
        const prod = new productsData.productModel(req.body);
        prod.save(function(err){
            productsData.productModel.find({}, function(err, data){
                if (!err) {
                    res.send(data);
                }
            });
        });
        //products.push(req.body);
        //res.send(products);
    },
    removeProducts: function (req, res) {
        productsData.productModel.deleteOne({id_prod: req.body.id}, function (err) {
            productsData.productModel.find({}, function(err, data){
                if (!err) {
                    res.send(data);
                }
            });
        });

        //products.splice(req.body.id, 1);
        //res.send(products);
    },
    updateProducts: function (req, res) {
    productsData.productModel.where({id_prod: req.body.id}).update({$set: req.body.data }, function(err){
            productsData.productModel.find({}, function(err, data){
                if (!err) {
                    res.send(data);
                }
            });
        })

        //const value = req.body.data;
        //const id = req.body.id-1;
        //products[id] = value;
        //res.send(products);
    }

};

module.exports = productsController;