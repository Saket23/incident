import { combineReducers } from 'redux';

import Auth from './authentication';

const rootReducer = combineReducers({
    auth: Auth
});

export default rootReducer;