import { combineReducers } from 'redux';
import layout from './layoutReducer';
import events from './eventsReducer';
import initialData from './initialDataReducer';
import products from './productsReducer';

const reducers = combineReducers({
	layout,
	events,
	initialData,
	products
});

export default reducers;