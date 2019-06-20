import API from './api-config';

export function getInitialData(dispatch, request) {
    return API('posts').then(data => dispatch(request(data)));
}

export function addProduct(dispatch, request, body) {
    return API('products/add', '', 'POST', body).then(data => dispatch(request(data)));
}

export function getProducts(dispatch, request) {
    return API('products').then(data => dispatch(request(data)));
}

export function deleteProduct(dispatch, request, body) {
    return API('products/delete', '', 'POST', body).then(data => dispatch(request(data)));
}

export function updateProduct(dispatch, request, body) {
    return API('products/update', '', 'POST', body).then(data => dispatch(request(data)));
}

