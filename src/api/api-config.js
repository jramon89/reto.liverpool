import fetch from 'node-fetch';
// import { Promise } from 'node-fetch'
// import {Promise} from 'es6-promise';
import config from './api-path';
require('es6-promise').polyfill();
export const path = process.env.HOST || 'localhost',
    port = process.env.PORT || 4000,
    api_url = `http://${path}:${port}/api`;//'https://unnusoft.herokuapp.com/api';

export default function apiConfig(endpoint, params, method = 'GET', body) {
    return fetch(`${api_url}/${endpoint}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()
            .then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return json;
            }

            return json;
        }).then(
            response => response
        ).catch(e => e);
}
