import React, { Component } from 'react';
import Header from './Header';
import AddApplication from './AddApplication';
import ApplicationForm from './ApplicationForm';
import {connect} from 'react-redux';
import { createNewApplication, fetchAllApplications } from './services/ApplicationRequests';
import { receiveHomePage } from './actions';
import { transformListIntoTupleList } from './utils/ListUtil';

import CentralisedContentWrapper from './CentralisedContentWrapper';
import ApplicationTag from './ApplicationTab';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        console.log('application tab clicked with', application);
    }

    renderSavedApplications = () => {
        const { applications } = this.props;

        console.log('applications', applications);
        if (applications !== undefined || applications === []) { 
            const tupleList = transformListIntoTupleList(applications);

            const tabs = tupleList.map((tuple) => {
                return (
                    <Row key={tuple[0].id}>
                        <Col onClick={_ => this.handleApplicationTabClick(tuple[0])}>
                            <ApplicationTag id={tuple[0].id} name={tuple[0].name}/>
                        </Col>
                        <Col onClick={_ => this.handleApplicationTabClick(tuple[1])}>
                            {tuple[1] ? <ApplicationTag id={tuple[1].id} name={tuple[1].name}/> : null}
                        </Col>
                    </Row>
                );
            });

            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1} >
                    <Container>
                        {tabs}
                    </Container>
                </CentralisedContentWrapper>
            );
        }

        return (
            <CentralisedContentWrapper>Sem applicação irmão</CentralisedContentWrapper>
        );
    }

   render() {
        return (
            <div>
                <Header/>
                <AddApplication handleNewApplicationClick={this.handleNewApplicationClick}/>
                {this.maybeRenderNewApplicationForm()}
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

