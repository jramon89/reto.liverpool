import { 
	HIDE_LAYOUT_ELEMENTS,
    SET_TYPE_POST,
    SET_SCROLL_VALUE,
    SET_LANGUAGE
} from "../actions/actionsTypes";


const initialState = {
    hide: false,
    category: null,
    scroll: {
        top: null,
        height: null,
        isScrolling: null
    },
    language: '', //localStorage.getItem('lang') || navigator.language.split(/[-_]/)[0]
};

export default function(state=initialState, action){
    switch(action.type){
        case HIDE_LAYOUT_ELEMENTS:
            return {
                ...state,
                hide: action.hide,
            };
        case SET_TYPE_POST:
        	return {
                ...state,
        		category: action.cat,
        	};
        case SET_SCROLL_VALUE:
            return {
                ...state,
                scroll: action.value,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.lang
            };
        default:
            return state;

    }
}