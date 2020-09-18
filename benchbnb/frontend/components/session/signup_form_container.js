import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mstp = (state) => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    altLink: 'login'
});

const mdtp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mstp, mdtp)(SessionForm);