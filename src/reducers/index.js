import giphsReducer from './giphsReducer';
import formReducer from './formReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    giphs: giphsReducer,
    searchTerm: formReducer
})