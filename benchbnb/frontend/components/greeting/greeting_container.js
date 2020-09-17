import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mstp = (state) => {
    const id = state.session.currentUser;
    let user = state.entities.users[id];
    // if (!user) user = null;
    return ({
        currentUser: user
    });
};

const mdtp = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Greeting);