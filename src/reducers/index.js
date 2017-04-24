import { combineReducers } from 'redux';
import calendar from './calendar';
import lunchSignup from './lunchSignup'
import auth from './auth';

export default combineReducers({
    calendar,
    lunchSignup,
    auth
});