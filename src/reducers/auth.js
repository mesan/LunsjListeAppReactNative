import { handle } from 'redux-pack';
import { AUTHENTICATE_USER } from '../actionTypes';

const defaultState = {
    jwt: null,
    email: null,
    username: null,
    isLoading: false,
    error: null
};

/**
 * Extract first part of email to acquire username
 * @param {string} email     to extract username from
 * @returns {string} username or null
 */
const convertToUsername = email => {
    return email ? email.split('@')[0] : null;
};

export default (state = defaultState, action) => {
    const {token, email} = action.payload ? action.payload : {};
    switch (action.type) {
        case AUTHENTICATE_USER: return handle(state, action, {
            start: prevState => ({...state, isLoading: true, error: null}),
            failure: prevState => ({...state, error: action.payload, isLoading: false}),
            success: prevState => ({...state, jwt: token, email: email, username: convertToUsername(email), isLoading: false}),
        });
        default: return state;
    }
}