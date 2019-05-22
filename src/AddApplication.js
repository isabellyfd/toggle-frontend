import React from 'react';

import Button from 'react-bootstrap/Button';
import CentralisedContentWrapper from './CentralisedContentWrapper'

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