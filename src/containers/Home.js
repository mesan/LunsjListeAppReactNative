import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators/index';
import { setSignedUp} from '../actionCreators/lunch-signup'
import { signUpForLunch, fetchUserSignedUpForLunch } from '../services/LunchApiService';
import HomeView from '../views/HomeView';

const mapStateToProps = state => {
    return {
        selectedDate: state.calendar.selectedDate,
        isSignedUpForLunch: state.lunchSignup.isSignedUpForLunch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate)),
        signUpForLunch,
        fetchUserSignedUpForLunch,
        setSignedUp: signedUpForLunch => dispatch(setSignedUp(signedUpForLunch))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);