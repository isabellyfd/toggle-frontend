import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';

const LoginCredentials = ({title, handleSubmit, handleSetEmail, handleSetPassword}) => {
    return (
        <div>
            <h2>{title}</h2>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text> Email </InputGroup.Text>
                    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={handleSetEmail}></Form.Control>
                </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text> Password </InputGroup.Text>
                    <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={handleSetPassword}></Form.Control>
                </InputGroup.Prepend>
            </InputGroup>
            <Button variant="secondary"
                onClick={handleSubmit}>Log In</Button>
        </div>
    );
}

export default LoginCredentials;