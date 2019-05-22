import React, { Component } from 'react';
import Header from './Header';
import AddApplication from './AddApplication';
import ApplicationForm from './ApplicationForm';
import {connect} from 'react-redux';
import { createNewApplication, fetchAllApplications } from './services/ApplicationRequests';
import { receiveHomePage } from './actions';

import CentralisedContentWrapper from './CentralisedContentWrapper';
import ApplicationTag from './ApplicationTab';

class Homepage extends Component {

    constructor(props){
        super(props);
        console.log('props in home page', props);
        this.state = {
            showNewApplicationForm: false,
            newApplicationName: '',
        }
    }

    componentWillMount(){
        this.fetchApplications()
    }

    fetchApplications = () => {
        fetchAllApplications(this.props.userId, (applications => {
            if (applications !== undefined) {
                this.props.receiveHomePage(applications);
            }
        }));
    }

    handleNewApplicationClick = () => {
        this.setState({ showNewApplicationForm: true });
    }

    handleNewApplicationSetName = event => {
        const name = event.target.value;
        this.setState({ newApplicationName: name });
    }

    handleNewApplicationSubmit = () => {
        this.setState({showNewApplicationForm: false});
        createNewApplication(this.state.newApplicationName, this.props.userId, (wasCreationSuccessful => {
            if (wasCreationSuccessful){
                this.fetchApplications()
            }
        }));
    }

    maybeRenderNewpplicationForm = () => {
        if (this.state.showNewApplicationForm) {
            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1} >
                    <ApplicationForm 
                                handleNewApplicationName={this.handleNewApplicationSetName}
                                handleNewApplicationSubmit={this.handleNewApplicationSubmit}/>
                </CentralisedContentWrapper>
            );
        }
    }

    renderSavedApplications = () => {
        const { applications } = this.props;

        console.log('applications', applications);
        if (applications !== undefined) { 

            const itens = applications.map((application) => {
                return (
                    <ApplicationTag key={application.id} id={application.id} name={application.name}/>
                );
            });
            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1} >
                    {itens}
                </CentralisedContentWrapper>
            );
        }

        return (
            <div>Sem applicação irmão</div>
        );
    }

   render() {
        return (
            <div>
                <Header/>
                <AddApplication handleNewApplicationClick={this.handleNewApplicationClick}/>
                {this.maybeRenderNewpplicationForm()}
                {this.renderSavedApplications()}
            </div>
        );
   }
}

const mapStateToProps = (state) => {
    return {
        userId: state.authenticationReducer.userId,
        email: state.authenticationReducer.email,
        applications: state.applicationReducer.applications
    }
}

const mapActionsToProp = {
    receiveHomePage
}

export default connect(mapStateToProps, mapActionsToProp)(Homepage);

