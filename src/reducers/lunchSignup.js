import { IS_SIGNED_UP_FOR_LUNCH } from '../actionTypes/lunch-signup';

const defaultState = {
    isSignedUpForLunch: false
};

export default (state = defaultState, action) => {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case IS_SIGNED_UP_FOR_LUNCH: {
            temp.isSignedUpForLunch = action.isSignedUpForLunch;
            console.log("reducer isSignedUpForLunch: ", temp.isSignedUpForLunch);
            return temp;
        }
        default: return temp;
    }
}