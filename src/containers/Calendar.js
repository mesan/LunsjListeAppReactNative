import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators/index';
import { signUpForLunch } from '../services/LunchApiService';
import CalendarView from '../views/CalendarView';

const mapStateToProps = state => ({
    selectedDate: state.calendar.selectedDate
});

const mapDispatchToProps = dispatch => (
    {
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate)),
        signUpForLunch: signUpForLunch
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarView);