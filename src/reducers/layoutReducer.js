import { GET_INIT_VALUES  } from "../actions/actionsTypes";


const initialState = {
	menu:{
		menu_a: [
			{
				"title": "Home",
				"link": "/",
				"active": true,
				"actionable": false,
				"lang_id": "APP"
			},
			{
				"title": "Todos",
				"link": "/",
				"active": true,
				"actionable": false,
			},
			{
				"title": "Agregar nuevo",
				"link": "/nuevo",
				"active": true,
				"actionable": false,
			},
		],
		menu_b: []
	}
};

export default function(state=initialState, action){
	switch(action.type){
		
		case GET_INIT_VALUES:
			return {
				menu: state.menu
			};
		default:
			return state

	}
}