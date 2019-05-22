import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CentralisedContentWrapper = ({children, left, middle, right}) => {
    return (
        <Container>
            <Row>
                <Col sm={left}></Col>
                <Col sm={middle}>
                    {children}
                </Col>
                <Col sm={right}></Col>
            </Row>
        </Container>
    );
}

export default CentralisedContentWrapper;