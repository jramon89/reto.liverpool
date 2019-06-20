const mongoose = require('mongoose'),
    config = require('./config'),
    model = require('../models');

const dbConnect = function() {
    mongoose.connect(config.pathdb,  { useNewUrlParser: true }, function(err) {
        if (err) {
            console.log('Error traying to connect to database: '+ config.pathdb);
        } else {
            console.log('DB runing on', config.pathdb);
        }
    });
};

const dbQuery = function() {

    function queryInsert(model, data) {
        model.find()
            .count()
            .then(function(size) {
                if (size > 0) {
                    return;
                }

                model.create(data, function(error, data) {
                    if (error) {
                        console.log('Error trying to save data')
                    }
                });

            });
    }

    Object.keys(model).forEach(function(val){
       queryInsert(model[val].model, model[val].data);
    });
};

exports.init = function() {
    dbConnect();
    dbQuery();
};
