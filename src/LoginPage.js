import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './Header';

import * as firebase from 'firebase';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const config = {
    apiKey: "AIzaSyC1j_HZ0NNceyP4ixqHdbkra4vHhqtIArc",
    authDomain: "toggle-app-ed92c.firebaseapp.com",
    databaseURL: "https://toggle-app-ed92c.firebaseio.com",
    projectId: "toggle-app-ed92c",
    storageBucket: "toggle-app-ed92c.appspot.com",
    messagingSenderId: "572630900278"
};

firebase.initializeApp(config);

class Login extends PureComponent {

    firebaseuiConfig = {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        },
    };

    /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.updateStateAndGoToNextPage(user.email, user.uid);
    });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
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
            <StyledFirebaseAuth uiConfig={this.firebaseuiConfig}
            firebaseAuth={firebase.auth()}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.authenticationReducer.email
    }
}

export default connect(mapStateToProps, actions)(Login);