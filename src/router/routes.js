import Layout from '../views/Layout/Layout';
import Views from '../views';
import React from 'react';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Views.Home
            },
            {
                path: '/nuevo',
                exact: true,
                component: Views.NewProduct
            },
            {
                path: '/editar/:id',
                exact: true,
                component: Views.NewProduct
            },
        ]
    }
];

export default routes;
