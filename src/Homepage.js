import React, { Component } from 'react';
import Header from './Header';
import AddTab from './AddTab';
import ApplicationForm from './ApplicationForm';
import {connect} from 'react-redux';
import { createNewApplication, fetchAllApplications } from './services/ApplicationRequests';
import { receiveHomePage, onClickApplicationTab } from './actions';

import CentralisedContentWrapper from './CentralisedContentWrapper';
import GroupTab from './GroupTab';

class Homepage extends Component {

    constructor(props){
        super(props);
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

    maybeRenderNewApplicationForm = () => {
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

    handleApplicationTabClick = (application) => {
        this.props.onClickApplicationTab(application.id, application.name);
        this.props.history.push('/toggles');
    }

    renderSavedApplications = () => {
        const { applications } = this.props;

        if (applications !== undefined) { 
            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1} >
                    <GroupTab 
                        list={applications}
                        handleTabClick={this.handleApplicationTabClick} />
                </CentralisedContentWrapper>
            );
        }
    }

   render() {
        return (
            <div>
                <Header/>
                <AddTab 
                    buttonTitle="New Application" 
                    handleClick={this.handleNewApplicationClick}/>
                {this.maybeRenderNewApplicationForm()}
                {this.renderSavedApplications()}
            </div>
        );
   }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userId: state.authenticationReducer.userId,
        email: state.authenticationReducer.email,
        applications: state.applicationReducer.applications
    }
}

const mapActionsToProp = {
    receiveHomePage,
    onClickApplicationTab
}

export default connect(mapStateToProps, mapActionsToProp)(Homepage);

