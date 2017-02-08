const defaultState = {
	user: {
		username: 'kajas',
		fullName: 'Kaja Longem Skaar',
		allergies: ['Paprika', 'Laktose', 'Ikke-rå fisk']
	}
};

export default (state = defaultState, action) => {
	const temp = Object.assign({}, state);
	switch (action.type) {
		default: return temp;
	}
}