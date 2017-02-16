import { combineReducers } from 'redux';
import calendar from './calendar';
import lunchSignup from './lunchSignup'

export default combineReducers({
    calendar,
    lunchSignup
});