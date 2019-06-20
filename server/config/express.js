const express = require('express'),
    exphbs  = require('express-handlebars'),
    createLocaleMiddleware = require('express-locale'),
    path = require('path'),
    bodyParser = require('body-parser'),
    open = require('open'),
    app = express(),
    config = require('./config'),
    mongoose = require('./mongoose'),
    hbs = exphbs.create({});

function settings() {

    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', process.cwd() + '/server/views');
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(createLocaleMiddleware());

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, Accept, user, X-Requested-With, Content-Type');
        next();
    });

    mongoose.init();

    Object.keys(config.routes).forEach(function(val) {
        app.use('/api', config.routes[val]);
    });

    console.log('process.env.RUN_SSR', process.env.RUN_SSR);

    if (process.env.RUN_SSR) {
        require('./ssr')(app);
    }

    app.listen(config.port, function() {
        console.log('Server running on:', config.port);
        // open(`http://${config.host}:${config.port}`);
    });
}

module.exports = settings;
