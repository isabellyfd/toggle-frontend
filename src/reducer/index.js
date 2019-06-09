import authenticationReducer from './AuthenticationReducer';
import applicationReducer from './ApplicationReducer';
import toggleReducer from './ToggleReducer';

import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    authenticationReducer,
    applicationReducer,
    toggleReducer
});

export default rootReducers;