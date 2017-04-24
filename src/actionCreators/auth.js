import { SET_JWT_TOKEN, SET_EMAIL, AUTHENTICATE_USER, GET_EMAIL } from '../actionTypes';
import { login } from '../services/LunchApiService';

export const authenticateUser = (email, password) => ({
    type: AUTHENTICATE_USER,
    promise: login(email, password)
});
