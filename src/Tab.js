import React from 'react';
import Switch from 'react-switch';
import './tab-style.css'
const Tag = ({id, name, toggle}) => {
    return (
        <div className="tab">
            <h4>{name}</h4>
            {toggle && toggle.value !== undefined ? <Switch onChange={(newValue) => toggle.onChange(id, name, newValue)} checked={toggle.value} /> : null}
            <p>id: {id}</p>
        </div>
    );
}

export default Tag;