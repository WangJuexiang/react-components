import { combineReducers } from 'redux';
import commenListReducer from './commentList_reducer';
import articlListReducer from './articleList_reducer';

export default combineReducers({
	commenListReducer,
	articlListReducer
})
