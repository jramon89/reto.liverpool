import {
    GET_INITIAL_DATA,
    GET_INITIAL_COURSES,
    GET_INITIAL_TUTORIALS,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_TUTORIALS_SUCCESS
} from "../actions/actionsTypes";


const initialState = {
    posts: [{
        "catId": 0,
        "title": "",
        "seoTitle": "",
        "category": "",
        "section": "",
        "pathname": "",
        "image": "",
        "icon": "",
        "details": ""
    }],
    courses: [],
    tutorials: [],
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_INITIAL_DATA:
            return {
                ...state,
                posts: action.data,
            };
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.data
            };
        case GET_ALL_TUTORIALS_SUCCESS:
            return {
                ...state,
                tutorials: action.data
            };
        default:
            return state

    }
}