import { SET_SELECTED_DAY } from '../actionTypes/index';

export const setSelectedDay = selectedDate => ({
    type: SET_SELECTED_DAY,
    selectedDate
});