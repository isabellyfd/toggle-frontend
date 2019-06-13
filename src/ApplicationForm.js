import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './form.css'

const ApplicationForm = ({handleNewApplicationName, handleNewApplicationSubmit}) => {
    return (
        <div className="form">
            <Form>
                <Form.Group>
                    <Form.Label>Application name</Form.Label>
                    <Form.Control placeholder="Enter an application name"  onChange={handleNewApplicationName}/>
                </Form.Group>
                <Button variant="secondary" onClick={handleNewApplicationSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ApplicationForm;