import { connect } from 'react-redux';
import { changeAllergies, setAllergies } from '../actionCreators/userProfile';
import { getAllergies, updateAllergies } from '../services/ProfileApiService';
import ProfileView from '../views/ProfileView';

const mapStateToProps = state => ({
    selectedDate: state.calendar.selectedDate,
    navigationStateIndex: state.tab.navigationStateIndex,
    username: "kajas",// state.auth.username
    user: state.profile.user,
    allergyList: state.profile.allergyList,
    text: state.profile.text
});

const mapDispatchToProps = dispatch => {
    return {
        getAllergies,
        setAllergies: allergyList => dispatch(setAllergies(allergyList)),
        changeAllergies: (allergyList, user) => dispatch(updateAllergies(allergyList, user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileView);