import { SET_SELECTED_DAY } from '../actionTypes';

export const setSelectedDay = (selectedDate) => ({
    type: SET_SELECTED_DAY,
    selectedDate
});