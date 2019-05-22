import React, { Component } from 'react';
import Header from './Header';
import AddApplication from './AddApplication';
import ApplicationForm from './ApplicationForm';
import {connect} from 'react-redux';
import { createNewApplication } from './services/ApplicationRequests';

class Homepage extends Component {

    constructor(props){
        super(props);
        console.log('props in home page', props);
        this.state = {
            showNewApplicationForm: false,
            newApplicationName: '',
        }
    }

    handleNewApplicationClick = () => {
        this.setState({showNewApplicationForm: true })
    }

    handleNewApplicationSetName = event => {
        const name = event.target.value;
        this.setState({ newApplicationName: name })
    }

    handleNewApplicationSubmit = () => {
        createNewApplication(this.state.newApplicationName, this.props.userId, (wasCreationSuccessful => {
            if (wasCreationSuccessful){
                console.log("need to refresh applications in store")
            }
        }));
    }

    maybeRenderNewpplicationForm = () => {
        if (this.state.showNewApplicationForm) {
            return (
                <ApplicationForm 
                    handleNewApplicationName={this.handleNewApplicationSetName}
                    handleNewApplicationSubmit={this.handleNewApplicationSubmit}/>
            );
        }
    }

   render() {
        return (
            <div>
                <Header/>
                <AddApplication handleNewApplicationClick={this.handleNewApplicationClick}/>
                {this.maybeRenderNewpplicationForm()}
            </div>
        );
   }
}

const mapStateToProps = (state) => {
    return {
        userId: state.authenticationReducer.userId,
        email: state.authenticationReducer.email
    }
}

export default connect(mapStateToProps)(Homepage);

