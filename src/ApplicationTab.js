import React from 'react';

const ApplicationTag = ({id, name}) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>id: {id}</p>
        </div>
    );
}

export default ApplicationTag;