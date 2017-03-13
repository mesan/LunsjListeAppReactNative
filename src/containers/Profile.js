import { connect } from 'react-redux';
import ProfileView from '../views/ProfileView';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		user: state.profile.user,
		text: state.profile.text
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfileView);