import { IS_SIGNED_UP_FOR_LUNCH } from '../actionTypes/lunch-signup';

const defaultState = {
    fetchUserSignedUpForLunch: false
};

export default (state = defaultState, action) => {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case IS_SIGNED_UP_FOR_LUNCH: {
            temp.fetchUserSignedUpForLunch = action.fetchUserSignedUpForLunch;
            console.debug("fetchUserSignedUpForLunch: ", temp.fetchUserSignedUpForLunch);
            return temp;
        }
        default: return temp;
    }
}