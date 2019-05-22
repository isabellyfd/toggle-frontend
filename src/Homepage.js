import React, { Component } from 'react';
import Header from './Header';
import AddApplication from './AddApplication';
import ApplicationForm from './ApplicationForm';
import {connect} from 'react-redux';
import { createNewApplication, fetchAllApplications } from './services/ApplicationRequests';
import { receiveHomePage } from './actions';

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
        this.setState({ showNewApplicationForm: true })
    }

    handleNewApplicationSetName = event => {
        const name = event.target.value;
        this.setState({ newApplicationName: name })
    }

    handleNewApplicationSubmit = () => {
        createNewApplication(this.state.newApplicationName, this.props.userId, (wasCreationSuccessful => {
            if (wasCreationSuccessful){
                this.fetchApplications()
            }
        }));
    }

    maybeRenderNewpplicationForm = () => {
        if (this.state.showNewApplicationForm) {
            return (
                <Container>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <ApplicationForm 
                                handleNewApplicationName={this.handleNewApplicationSetName}
                                handleNewApplicationSubmit={this.handleNewApplicationSubmit}/>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            );
        }
    }

    renderSavedApplications = () => {
        const { applications } = this.props;

        console.log('applications', applications);
        if (applications !== undefined) { 

            const itens = applications.map((application) => {
                return (<div key={application.id}>
                    {application.name}
                </div>)
            });
            return (
                <Container>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            {itens}
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
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

