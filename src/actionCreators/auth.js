import { SET_JWT_TOKEN } from '../actionTypes'

export const setJwt = jwt => ({
    type: SET_JWT_TOKEN,
    jwt
});