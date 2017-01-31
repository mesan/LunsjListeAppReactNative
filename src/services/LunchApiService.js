import { API_BASE_URL } from 'react-native-dotenv';

export const signUpForLunch = (selectedDate, user) => {
    if (!selectedDate) {
        throw Error('date cannot be undefined');
    }
    
    const url = buildUrl(selectedDate);
    console.debug('URL: ', url);

    console.debug('Signing user: ', user, ' up for lunch on date: ', selectedDate);

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({user: true})
    }).then(response => {
        return response.ok;
    });
};

const buildUrl = (selectedDate) => {
    return API_BASE_URL + '/' + selectedDate.getFullYear() + '/' + selectedDate.getMonth() + 1 + '/' + selectedDate.getDate() + '.json';
};