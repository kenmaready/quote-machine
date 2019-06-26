import { combineReducers } from 'redux';
import { quoteReducer } from './quoteReducer.js';
import { colorReducer } from './colorReducer.js';


export default combineReducers({
    quote: quoteReducer,
    color: colorReducer
});