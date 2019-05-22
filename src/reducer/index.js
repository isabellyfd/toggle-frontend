import authenticationReducer from './AuthenticationReducer';
import applicationReducer from './ApplicationReducer';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    authenticationReducer,
    applicationReducer
});

export default rootReducers;