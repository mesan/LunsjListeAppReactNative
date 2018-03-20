import {API_BASE_URL, AUTH_SERVICE_URL} from 'react-native-dotenv';

export const updateAllergies = (allergyList, user) => {

    const url = buildAllergiesUrl(user);
    console.debug('Updating user: ', user, '\'s allergies: ', allergyList);

    return fetch(url, {
        method: 'PUT',
        body: generateAllergiesBody(allergyList)
    }).then(response => {
        return response.ok;
    });
};

export const getAllergies = (user) => {
    console.debug('Getting user: ', user, '\'s allergies: ');

    const url = buildAllergiesUrl(user);

    console.debug('GET ', url);


    return fetch(url, {
        method: 'GET'
    }).then(response => response.json())
        .then(response => {
            if (!response) {
                return false;
            }

            return response;
        });
};

const buildAllergiesUrl = (user) => {
    return API_BASE_URL + '/'
        + 'brukere'
        + '/' + user
        + '/allergier.json';
};

const generateAllergiesBody = allergyList => {
    return JSON.stringify({
        allergier: allergyList
    });
};