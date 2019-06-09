import React, {PureComponent} from 'react';
import { signUp } from './services/AutheticationRequests';
import {connect} from 'react-redux';
import * as actions from './actions';

import LoginCredentials from './LoginCredencials';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';

import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1j_HZ0NNceyP4ixqHdbkra4vHhqtIArc",
    authDomain: "toggle-app-ed92c.firebaseapp.com",
    databaseURL: "https://toggle-app-ed92c.firebaseio.com",
    projectId: "toggle-app-ed92c",
    storageBucket: "toggle-app-ed92c.appspot.com",
    messagingSenderId: "572630900278"
};

firebase.initializeApp(config);

const firebaseuiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: 'http://localhost:3000/homepage',
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log(authResult);
      console.log(redirectUrl);
      return true;
    }
  }
};


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

    componentDidMount() {
        const ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', firebaseuiConfig)
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
                {this.renderHeader()}
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={6}>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        </Jumbotron>
                        </Col>
                        <Col md="auto" sm={6}>
                            {this.renderLoginCredentials()}
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
    renderHeader = () => {
        return (
            <Header/>
        )
    }

    renderLoginCredentials = () => {
        return (
            <div>
                <div id="firebaseui-auth-container"></div>
                {/* <LoginCredentials 
                    title="Log In"
                    handleSetEmail={this.handleEmailField}
                    handleSetPassword={this.handlePasswordField}
                    handleSubmit={this.handleSubmit} /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.authenticationReducer.email
    }
}

export default connect(mapStateToProps, actions)(Login);