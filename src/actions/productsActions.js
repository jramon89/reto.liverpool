import {
    ADD_PRODUCTS,
    GET_PRODUCTS,
    DELETE_PRODUCTS,
    UPDATE_PRODUCTS
} from "./actionsTypes";


import * as API  from '../api/api';

export function addProduct(data) {
    return {
        type: ADD_PRODUCTS,
        data
    }
}

export function fetchAddProducts(data) {
    return dispatch => {
        return API.addProduct(dispatch, (data) => addProduct(data), data);
    }
}

export function getProducts(data) {
    return {
        type: GET_PRODUCTS,
        data
    }
}

export function fetchProducts() {
    return dispatch => {
        return API.getProducts(dispatch, (data) => getProducts(data));
    }
}

export function deleteProduct(data) {
    return {
        type: DELETE_PRODUCTS,
        data
    }
}

export function fetchDeleteProduct(data) {
    return dispatch => {
        return API.deleteProduct(dispatch, (data) => deleteProduct(data), data);
    }
}

export function updateProduct(data) {
    return {
        type: UPDATE_PRODUCTS,
        data
    }
}

export function fetchUpdateProduct(data) {
    return dispatch => {
        return API.updateProduct(dispatch, (data) => updateProduct(data), data)
    }
}



