import { connect } from 'react-redux';
import ProfileView from '../views/ProfileView';

const mapStateToProps = (state) => {
	return {
		user: state.user
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