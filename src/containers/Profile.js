import { connect } from 'react-redux';
import ProfileView from '../views/ProfileView';

const mapStateToProps = state => ({
    selectedDate: state.calendar.selectedDate,
    navigationStateIndex: state.tab.navigationStateIndex,
    username: "idarv"// state.auth.username
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileView);