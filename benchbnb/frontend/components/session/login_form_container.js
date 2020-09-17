import { connect } from 'react-redux';
import SessionForm from 'session_form';
import { login } from '../../actions/session_actions';

const mstp = (state) => ({
    errors: state.errors,
    formType: 'Log In',
    altLink: 'signup'
});

const mdtp = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mstp, mdtp)(SessionForm);