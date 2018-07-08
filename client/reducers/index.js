import  { combineReducers } from 'redux'
import posts from './postReducer'
// import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
	posts: posts,
});

export default rootReducer
