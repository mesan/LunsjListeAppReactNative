import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators/index';
import { signUpForLunch } from '../services/LunchApiService';
import {setNavigationStateIndex} from '../actionCreators/tabview'
import CalendarView from '../views/CalendarView';

const mapStateToProps = state => ({
    selectedDate: state.calendar.selectedDate,
    navigationStateIndex: state.tab.navigationStateIndex
});

const mapDispatchToProps = dispatch => ({
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate)),
        setNavigationStateIndex: navigationStateIndex => dispatch(setNavigationStateIndex(navigationStateIndex)),
        signUpForLunch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarView);