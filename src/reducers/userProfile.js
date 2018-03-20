import { CHANGE_ALLERGIES, SET_ALLERGIES  } from '../actionTypes/userProfile'

const defaultState = {
	user: {
		allergies: ['Paprika', 'Laktose', 'Ikke-rå fisk']
	},
	text: '',
    allergyList: [],
	isNoe: false
};

export default (state = defaultState, action) => {
	const temp = Object.assign({}, state);
    switch (action.type) {
		case SET_ALLERGIES: {
            temp.allergyList = action.allergyList;
			return temp;
		}
		case CHANGE_ALLERGIES: {
			temp.allergyList = action.allergyList;
			return temp;
		}
		default: return temp;
	}
}