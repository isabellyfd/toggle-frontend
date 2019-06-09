import React, { Component } from 'react';
import {connect} from 'react-redux';

import { receiveTogglePage } from './actions';
import Header from './Header';
import AddTab from './AddTab';

import { createToggle, fetchAllToggles } from './services/ToggleRequests';
import CentralisedContentWrapper from './CentralisedContentWrapper';
import ToggleForm from './ToggleForm';

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

    fecthToggles = () => {
        fetchAllToggles(this.props.applicationId, (toggles) => {
            if (toggles !== undefined) {
                this.props.receiveTogglePage(toggles);
            }
        });
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
        createToggle(this.state.newToggleName, this.state.checked, this.props.applicationId, (response => {
            if (response !== undefined) {
                this.fecthToggles()
            }
        }));
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

    render() {
        return (
            <div>
                <Header toggleName={this.props.applicationName}/>
                <AddTab 
                    buttonTitle="New Toggle"
                    handleClick={this.handleAddNewToggle}
                    />
                {this.maybeRenderAddNewToggleForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        applicationId: state.applicationReducer.chosenApplicationId,
        applicationName: state.applicationReducer.chosenApplicationName,
        toggles: state.toggleReducer.toggles
    }
}

const mapActionsToProp = {
    receiveTogglePage
}

export default connect(mapStateToProps, mapActionsToProp)(TogglesPage);