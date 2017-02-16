import { SET_SELECTED_DAY } from '../actionTypes';

const defaultState = {
    selectedDate: new Date()
};

export default (state = defaultState, action) => {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case SET_SELECTED_DAY: {
            temp.selectedDate = action.selectedDate;
            console.debug("selectedDate: ", temp.selectedDate);
            return temp;
        }
        default: return temp;
    }
}