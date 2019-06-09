import React  from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({toggleName}) => {
    return (
        <Navbar bg="light" expand="lg">
                    <Navbar.Brand>CocoaToggles{toggleName ? `> ${toggleName}` : ''}</Navbar.Brand>
        </Navbar>
    );
}

export default Header;