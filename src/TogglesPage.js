import React, { Component } from 'react';
import {connect} from 'react-redux';

import { receiveTogglePage } from './actions';
import Header from './Header';
import AddTab from './AddTab';

import { createToggle, fetchAllToggles, updateToggleValue } from './services/ToggleRequests';
import CentralisedContentWrapper from './CentralisedContentWrapper';
import ToggleForm from './ToggleForm';
import GroupTab from './GroupTab';

class TogglesPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            checked: false,
            newToggleName: '',
            showToggleForm: false
        }
    }

    componentWillMount() {
        this.fecthToggles();
    }

    componentWillUnmount() {
        const empty = [];
        this.props.receiveTogglePage(empty);
    }

    fecthToggles = () => {
        fetchAllToggles(this.props.applicationId, (toggles => {
            if (toggles !== undefined) {
                this.props.receiveTogglePage(toggles);
            }
        }));
    }

    handleAddNewToggle = () => {
        this.setState({showToggleForm: true})
    }

    handleNewToggleName = event => {
        const name = event.target.value;
        this.setState({ newToggleName: name });
    }

    handleNewToggleValue = checked => {
        this.setState({checked})
    }


    handleNewToggleSubmit = () => {
        this.setState({showToggleForm: false})
        createToggle(this.state.newToggleName, this.state.checked, this.props.applicationId, (response => {
            if (response !== undefined) {
                this.fecthToggles()
            }
        }));
    }

    handleToggleValueChange = (id, name, value) => {
        updateToggleValue(id, name, value, this.props.applicationId, (response) => {
            if (response !== undefined) {
                fetchAllToggles()
            }
        })
    }

    maybeRenderAddNewToggleForm = () => {
        if (this.state.showToggleForm) {
            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1}>
                    <ToggleForm 
                        checked={this.state.checked}
                        handleNewToggleName={this.handleNewToggleName}
                        handleNewToggleValue={this.handleNewToggleValue}
                        handleNewToggleSubmit={this.handleNewToggleSubmit}/>
                </CentralisedContentWrapper>
            )
        }
    }

    renderSavedApplications = () => {
        const { toggles } = this.props;

        if (toggles !== undefined) {
            return (
                <CentralisedContentWrapper 
                    left={1}
                    middle={10}
                    right={1} >
                    <GroupTab  
                        list={toggles}
                        handleTabClick={(event) => console.log(event)}
                        handleSwitchChange={this.handleToggleValueChange}
                    />
                </CentralisedContentWrapper>
            )
        }
    }

    render() {
        return (
            <div>
                <Header toggleName={this.props.applicationName}/>
                <CentralisedContentWrapper
                    left={1}
                    middle={10}
                    right={1}>
                    <div>
                        <h3>App Configuration</h3>
                        <p>User Id: {this.props.userId}</p>
                        <p>Application Id: {this.props.applicationId}</p>
                    </div>
                </CentralisedContentWrapper>
                <AddTab 
                    buttonTitle="New Toggle"
                    handleClick={this.handleAddNewToggle}
                    />
                {this.maybeRenderAddNewToggleForm()}
                {this.renderSavedApplications()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        applicationId: state.applicationReducer.chosenApplicationId,
        applicationName: state.applicationReducer.chosenApplicationName,
        userId: state.authenticationReducer.userId,
        toggles: state.toggleReducer.toggles
    }
}

const mapActionsToProp = {
    receiveTogglePage
}

export default connect(mapStateToProps, mapActionsToProp)(TogglesPage);