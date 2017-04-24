import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { authenticateUser } from '../actionCreators';
import LoginView from '../views/LoginView';

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        attemptLogin: (email, password) => dispatch(authenticateUser(email, password))
            .then(success => success ? Actions.TabView() : null)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);