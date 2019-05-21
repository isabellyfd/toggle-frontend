import { App } from '../App';
import { connect } from 'react-redux';
import { signUp } from '../actions';

const mapStateToProps = store => ({
    email: store.email,
    userId: store.userId
});

const mapActionsToProps = {
    onSignUp: signUp
};

export default connect(mapStateToProps, mapActionsToProps)(App);
