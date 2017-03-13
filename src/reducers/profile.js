import { NOE } from '../actionTypes/profile'

const defaultState = {
	user: {
		username: 'kajas',
		fullName: 'Kaja Longem Skaar',
		allergies: ['Paprika', 'Laktose', 'Ikke-rå fisk']
	},
	text: '',
	isNoe: false
};

export default (state = defaultState, action) => {
	const temp = Object.assign({}, state);
	switch (action.type) {
		case NOE: {
			temp.isNoe = action.isNoe;
			return temp;
		}
		default: return temp;
	}
}