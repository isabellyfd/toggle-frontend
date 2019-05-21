import { authenticationReducer } from './AuthenticationReducer';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    authenticationReducer
});

export default rootReducers;