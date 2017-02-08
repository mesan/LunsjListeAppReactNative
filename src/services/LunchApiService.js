import {API_BASE_URL} from 'react-native-dotenv';

export const fetchUserSignedUpForLunch = (selectedDate, user) => {
    validateInput(selectedDate, user);

    const url = buildUrl(selectedDate, user);
    console.debug('Checking if user', user, 'is signed up for lunch on date: ', selectedDate);

    return fetch(url, {
        method: 'GET'
    }).then(response => {
        //this.state.setSignedUp(response.ok);
        return response.ok;
    });
};

export const signUpForLunch = (selectedDate, user) => {
    validateInput(selectedDate, user);

    const url = buildUrl(selectedDate, user);
    console.debug('Signing user: ', user, ' up for lunch on date: ', selectedDate);

    return fetch(url, {
        method: 'PUT',
        // TODO set signupforlunch based on past status
        body: generateSignUpBody(true)
    }).then(response => {
        return response.ok;
    });
};

const buildUrl = (selectedDate, user) => {
    return API_BASE_URL + '/'
        + selectedDate.getFullYear()
        + '/' + getFormattedMonth(selectedDate)
        + '/' + getFormattedDay(selectedDate)
        + '/users'
        + '/' + user
        + '.json';
};

const generateSignUpBody = (signedUpForLunch) => {
    return JSON.stringify({
        signedUpForLunch: signedUpForLunch
    });
};

const getFormattedMonth = (selectedDate) => {
    const month = selectedDate.getMonth() + 1; // Months are 0 - 11
    return month < 10 ? "0" + month : month
};

const getFormattedDay = (selectedDate) => {
    const day = selectedDate.getDate();
    return day < 10 ? "0" + day : day;
};

const validateInput = (selectedDate, user) => {
    if (!selectedDate) {
        throw Error('Could not check if signed up for lunch. Date must be defined.');
    }

    if (!user){
        throw Error('Could not check if signed up for lunch. User must be defined.');
    }
};