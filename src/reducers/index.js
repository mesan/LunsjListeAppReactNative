import { combineReducers } from 'redux';
import calendar from './calendar';
import profile from './profile';

export default combineReducers({
    calendar,
    profile
});