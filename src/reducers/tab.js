import { NATIVATIONSTATE_INDEX } from '../actionTypes/tabview';

const defaultState = {
    navigationStateIndex: 0
};

export default (state = defaultState, action) => {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case NATIVATIONSTATE_INDEX: {
            temp.navigationStateIndex = action.navigationStateIndex;
            console.debug("navigationState: ", temp.navigationStateIndex);
            return temp;
        }
        default: return temp;
    }
}