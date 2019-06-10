import React from 'react';
import { transformListIntoTupleList } from './utils/ListUtil';
import Tag from './Tab';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const buildToggle = (value, onChange) => {
    return {
        value,
        onChange
    }
}

const GroupTab = ({list, handleTabClick, handleSwitchChange}) => {
    
    const tupleList = transformListIntoTupleList(list);

    const tabs = tupleList.map((tuple) => {
        const firstToggle = buildToggle(tuple[0].value, handleSwitchChange);
        const secondToggle = tuple[1] ? buildToggle(tuple[1].value, handleSwitchChange) : undefined;

        return (
            <Row key={tuple[0].id}>
                <Col onClick={_ => handleTabClick(tuple[0])}>
                    <Tag className="tab-item"id={tuple[0].id} name={tuple[0].name} toggle={firstToggle}/>
                </Col>
                <Col onClick={_ => handleTabClick(tuple[1])}>
                    {tuple[1] ? <Tag className="tab-item" id={tuple[1].id} name={tuple[1].name} toggle={secondToggle}/> : null}
                </Col>
            </Row>
        );
    });

    return (
        <Container>
            {tabs}
        </Container>
    );
}

export default GroupTab;

