import {
	GET_INIT_VALUES, 
	HIDE_LAYOUT_ELEMENTS,
	GET_INITIAL_DATA,
} from "./actionsTypes";

import * as API  from '../api/api';

export function getMenuItems(data){
	return {
		type: GET_INIT_VALUES,
		listMenu: data,
		//listSocial: data.social
	}
}

export function hideLayoutElements(hide) {
	return {
		type: HIDE_LAYOUT_ELEMENTS,
		hide,
	}
}

export function getInitialData(data) {
    return {
        type: GET_INITIAL_DATA,
        data,
    }
}
export function fetchInitialData() {
    return dispatch => {
        return API.getInitialData(dispatch, (data) => getInitialData(data))
    }
}
