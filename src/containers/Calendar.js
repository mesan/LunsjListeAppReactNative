import { connect } from 'react-redux';
import { setSelectedDay } from '../actionCreators';
import CalendarView from '../views/CalendarView';

const mapStateToProps = (state) => {
    return {
        selectedDate: state.calendar.selectedDate
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedDate: selectedDate => dispatch(setSelectedDay(selectedDate))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarView);