import { CHANGE_ALLERGIES, SET_ALLERGIES } from '../actionTypes/userProfile';

export const changeAllergies = allergyList => ({
	type: CHANGE_ALLERGIES,
    allergyList
});

export const setAllergies = allergyList => ({
    type: SET_ALLERGIES,
    allergyList
});