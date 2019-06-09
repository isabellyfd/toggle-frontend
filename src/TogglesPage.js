import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import AddTab from './AddTab';

import { createToggle } from './services/ToggleRequest';
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

    handleAddNewToggle = () => {
        this.setState({showToggleForm: true})
    }

    handleNewToggleName = event => {
        console.log('handleNewToggleName', event)
        const name = event.target.value;
        this.setState({ newToggleName: name });
    }

    handleNewToggleValue = checked => {
        console.log('handleNewToggleValue', checked)
        this.setState({checked})
    }


    handleNewToggleSubmit = () => {
        console.log('handleNewToggleSubmit')
        createToggle(this.state.newToggleName, this.state.checked, this.props.applicationId, (response => {
            console.log('create new Toggle', response);
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
    return {
        applicationId: state.applicationReducer.chosenApplicationId,
        applicationName: state.applicationReducer.chosenApplicationName
    }
}

export default connect(mapStateToProps)(TogglesPage);