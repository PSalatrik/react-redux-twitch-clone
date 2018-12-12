import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer.js';

export default combineReducers ({
	auth: authReducer, //returns {...state, isSignedIn: true or false }
	form: formReducer //this is how you wire up redux form **you have to use
});