import React from 'react';
import Switch from 'react-switch';

const Tag = ({id, name, toggle}) => {
    return (
        <div>
            <h4>{name}</h4>
            {toggle && toggle.value !== undefined ? <Switch onChange={(newValue) => toggle.onChange(id, name, newValue)} checked={toggle.value} /> : null}
            <p>id: {id}</p>
        </div>
    );
}

export default Tag;