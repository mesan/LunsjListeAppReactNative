import { SET_JWT_TOKEN } from '../actionTypes';

const defaultState = {
    jwt: undefined,
};

export default (state = defaultState, action) => {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case SET_JWT_TOKEN: {
            temp.jwt = action.jwt;
            return temp;
        }
        default: return state;
    }
}