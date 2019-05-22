import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const AddApplication = ({handleNewApplicationClick}) => {
    return( 
        <div>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Button 
                            onClick={handleNewApplicationClick}
                            variant="secondary"
                            size="lg" 
                            block >
                            New Application
                        </Button>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddApplication;