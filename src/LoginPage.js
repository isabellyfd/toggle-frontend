import React, {PureComponent} from 'react';
import { signUp } from './services/AutheticationRequests';
import {connect} from 'react-redux';
import * as actions from './actions';

import LoginCredentials from './LoginCredencials';

class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    }

    componentWillMount() {
        console.log(this.props.email);
        if (this.props.email !== undefined && this.props.email !== '') {
            this.props.history.push('/homepage');
        }
    }

    handleEmailField = event => {
        const email = event.target.value;
        this.setState({email});
    }

    handlePasswordField = event => {
        const password = event.target.value;
        this.setState({password})
    }

    handleSubmit = () => {
        signUp(this.state.email, this.state.password, (userId => {
            if(userId !== undefined){
                this.updateStateAndGoToNextPage(this.state.email, userId);
            }
        }));
    }

    updateStateAndGoToNextPage = (email, userId) => {
        this.props.onSignUp(email, userId);
        this.props.history.push('/homepage');
    }

    render() {
        return (
            <div>
                {this.renderLoginCredentials()}
            </div>
        );
    }

    renderLoginCredentials = () => {
        return (
            <LoginCredentials 
                    title="Log In"
                    handleSetEmail={this.handleEmailField}
                    handleSetPassword={this.handlePasswordField}
                    handleSubmit={this.handleSubmit} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps, actions)(Login);