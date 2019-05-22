import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ApplicationForm = ({handleNewApplicationName, handleNewApplicationSubmit}) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Application name</Form.Label>
                <Form.Control placeholder="Enter an application name"  onChange={handleNewApplicationName}/>
            </Form.Group>
            <Button variant="secondary" onClick={handleNewApplicationSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default ApplicationForm;