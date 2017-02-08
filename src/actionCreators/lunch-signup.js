import { IS_SIGNED_UP_FOR_LUNCH } from '../actionTypes/lunch-signup';

export const setSignedUp = (isSignedUpForLunch) => ({
    type: IS_SIGNED_UP_FOR_LUNCH,
    isSignedUpForLunch
});