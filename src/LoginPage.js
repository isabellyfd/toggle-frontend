import React, {PureComponent} from 'react';
import { signUp } from './services/AutheticationRequests';
import {connect} from 'react-redux';
import * as actions from './actions';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
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
                <h2>Log In</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text> Email </InputGroup.Text>
                        <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm"></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text> Password </InputGroup.Text>
                        <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm"></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
                <Button variant="secondary"
                    onClick={this.handleSubmit}>Log In</Button>
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