import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Switch from 'react-switch';

import './form.css'

const ToggleForm = ({checked, handleNewToggleName, handleNewToggleValue, handleNewToggleSubmit}) => {
    return (
        <div className="form">
            <Form>
                <Form.Group>
                    <Form.Label>Toggle Name</Form.Label>
                    <Form.Control placeholder="Enter an toggle name" onChange={handleNewToggleName}></Form.Control>
                </Form.Group>
                Value 
                <br/>
                <Switch onChange={handleNewToggleValue} checked={checked} />
                <br/>
                <Button variant="secondary" onClick={handleNewToggleSubmit}>Sumbit</Button>
            </Form>
        </div>
    );
}

export default ToggleForm;