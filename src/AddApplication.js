import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const AddApplication = ({handleNewApplicationClick}) => {
    return( 
        <div>
            <CentralisedContentWrapper 
                left={2}
                middle={8}
                right={2}>
                <Button 
                    onClick={handleNewApplicationClick}
                    variant="secondary"
                    size="lg" 
                    block >
                    New Application
                </Button>
            </CentralisedContentWrapper>
        </div>
    );
}

export default AddApplication;