import { connect } from 'react-redux';
import { login } from '../services/LunchApiService';
import { setJwt } from '../actionCreators';
import LoginView from '../views/LoginView';

const attemptLogin = (email, password, dispatch) => {
    login(email, password).then(result => {
        dispatch(setJwt(result));
    })
    .catch(e => console.error(e));
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        attemptLogin: (email, password) => attemptLogin(email, password, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);