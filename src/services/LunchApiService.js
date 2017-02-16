import {API_BASE_URL} from 'react-native-dotenv';

export const fetchUserSignedUpForLunch = (selectedDate, user) => {
    validateInput(selectedDate, user);

    const url = buildUrl(selectedDate, user);
    console.debug('Checking if user', user, 'is signed up for lunch on date: ', selectedDate);

    return fetch(url, {
        method: 'GET'
    }).then(response => {
        if(!response.ok){
            return false;
        }

        return extractUserIsSignedUp(response);
    });
};

export const signUpForLunch = (selectedDate, user, status) => {
    validateInput(selectedDate, user);

    const url = buildUrl(selectedDate, user);
    console.debug('Signing user: ', user, ' up for lunch on date: ', selectedDate);

    return fetch(url, {
        method: 'PUT',
        body: generateSignUpBody(status)
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

const generateSignUpBody = signedUpForLunch => {
    return JSON.stringify({
        signedUpForLunch: signedUpForLunch
    });
};

const getFormattedMonth = selectedDate => {
    const month = selectedDate.getMonth() + 1; // Months are 0 - 11
    return month < 10 ? "0" + month : month
};

const getFormattedDay = selectedDate => {
    const day = selectedDate.getDate();
    return day < 10 ? "0" + day : day;
};

const extractUserIsSignedUp = response => {
    console.log('resp', response);
    console.log("before extract: " + JSON.parse(response._bodyText).signedUpForLunch);
    return JSON.parse(response._bodyText).signedUpForLunch;
};

const validateInput = (selectedDate, user) => {
    if (!selectedDate) {
        throw Error('Could not check if signed up for lunch. Date must be defined.');
    }

    if (!user){
        throw Error('Could not check if signed up for lunch. User must be defined.');
    }
};