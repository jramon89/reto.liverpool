const express = require('express'),
      path = require('path'),
      React = require('react'),
      ReactRedux = require('react-redux'),
      // ReactRouterConfig = require('react-router-config'),
      ReactDOMServer  = require('react-dom/server'),
      ReactRouterDOM = require('react-router-dom'),
      configureStore = require('../src/store/configureStore').default,
      Routes = require('../src/router/server.routes').default,
      store = configureStore(),
      open = require('open'),
      port = process.env.PORT || 10000,
      host = process.env.HOST || 10000,
      // App = require('../src/app'),
      app = express();


app.use(express.static(path.resolve('dist')));
app.use('/statics', express.static(path.resolve('dist')));

app.get('*', function(req, res, next){
    const StaticRouter = ReactRouterDOM.StaticRouter,
          Provider = ReactRedux.Provider,
          context = {},
          html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}>
                    <Routes/>
                </StaticRouter>
            </Provider>
          );
    res.send(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                <link rel="stylesheet" href="/statics/main.css">
                <title>joserdev</title>
            </head>
            <body>
                <section id="app">
                    ${ html }
                </section>
            </body>
            <script src="/statics/main.js"></script>
        </html>
    `);
});

app.listen(port, function(){
    open(`http://${host}:${port}`);
   console.log('Server listening on port: '+ port);
});
