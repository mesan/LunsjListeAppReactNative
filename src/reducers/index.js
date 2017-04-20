import { combineReducers } from 'redux';
import calendar from './calendar';
import lunchSignup from './lunchSignup'
import tab from './tab'

export default combineReducers({
    calendar,
    lunchSignup,
    tab
});