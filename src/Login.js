import React, {PureComponent} from 'react';
import { signUp } from './services/AutheticationRequests';
import {connect} from 'react-redux';
import * as actions from './actions';

class Login extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    }

    componentWillMount() {
        if (this.props.email === undefined || this.props.email === '') {
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
                <h3>Sign In/Log In</h3>
                <input type="text"
                    placeholder="Email"
                    onChange={this.handleEmailField}></input>
                <input type="text"
                    placeholder="Password"
                    onChange={this.handlePasswordField}></input> 
                <button type="button"
                    onClick={this.handleSubmit}>Log In</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps, actions)(Login);