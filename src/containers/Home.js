import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators';
import { signUpForLunch } from '../services/LunchApiService';
import HomeView from '../views/HomeView';

const mapStateToProps = (state) => {
    return {
        selectedDate: state.calendar.selectedDate
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate)),
        signUpForLunch: signUpForLunch
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);