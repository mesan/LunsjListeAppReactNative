import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators/index';
import { setSignedUp } from '../actionCreators/lunch-signup';
import { setNavigationStateIndex } from '../actionCreators/tabview';
import { signUpForLunch, fetchUserSignedUpForLunch } from '../services/LunchApiService';
import TabView from '../views/TabView';

const mapStateToProps = state => {
    return {
        navigationStateIndex: state.tab.navigationStateIndex,
        selectedDate: state.calendar.selectedDate,
        isSignedUpForLunch: state.lunchSignup.isSignedUpForLunch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate)),
        signUpForLunch,
        fetchUserSignedUpForLunch,
        setSignedUp: signedUpForLunch => dispatch(setSignedUp(signedUpForLunch)),
        setNavigationStateIndex: navigationStateIndex => dispatch(setNavigationStateIndex(navigationStateIndex))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabView);