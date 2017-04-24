import {NATIVATIONSTATE_INDEX} from '../actionTypes/tabview'

export const setNavigationStateIndex = navigationStateIndex => ({
    type: NATIVATIONSTATE_INDEX,
    navigationStateIndex
});