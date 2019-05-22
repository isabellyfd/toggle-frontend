import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CentralisedContentWrapper = ({left, middle, right}) => {
    return (
        <Container>
            <Row>
                <Col sm={left}></Col>
                <Col sm={middle}>
                    props.children
                </Col>
                <Col sm={right}></Col>
            </Row>
        </Container>
    );
}

export default CentralisedContentWrapper;