import {
    ADD_PRODUCTS,
    GET_PRODUCTS,
    DELETE_PRODUCTS,
    UPDATE_PRODUCTS
} from "../actions/actionsTypes";

const initialData = {
    items: []
};


export default function(state = initialData, action) {
    switch(action.type){
        case ADD_PRODUCTS:
            return {
                ...state,
                items: action.data
            };
        case GET_PRODUCTS:
            return {
                ...state,
                items: action.data
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                items: action.data
            };
        default:
            return state;
    }
}