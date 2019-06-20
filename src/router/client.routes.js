/*
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



import { connect } from 'react-redux';


import Routes from '../router/routes';
import { renderRoutes } from 'react-router-config';


const RoutesApp = ({messages, lang}) => (
    <Router>
        {
            renderRoutes(Routes)
        }
    </Router>
);

const RoutesAPPContent = connect(

)(RoutesApp);

export default RoutesAPPContent;
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const RoutesApp = (routes) => (
    <Router>
        {
            routes
        }
    </Router>

);

export default RoutesApp;
