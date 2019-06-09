import React from 'react';

import Button from 'react-bootstrap/Button';
import CentralisedContentWrapper from './CentralisedContentWrapper'

const AddTab = ({buttonTitle, handleClick}) => {
    return( 
        <div>
            <CentralisedContentWrapper 
                left={2}
                middle={8}
                right={2}>
                <Button 
                    onClick={handleClick}
                    variant="secondary"
                    size="lg" 
                    block >
                    {buttonTitle}
                </Button>
            </CentralisedContentWrapper>
        </div>
    );
}

export default AddTab;