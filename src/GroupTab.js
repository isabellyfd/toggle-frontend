import React from 'react';
import { transformListIntoTupleList } from './utils/ListUtil';
import ApplicationTag from './ApplicationTab';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GroupTab = ({applications, handleApplicationTabClick}) => {
    
    const tupleList = transformListIntoTupleList(applications);

    const tabs = tupleList.map((tuple) => {
        return (
            <Row key={tuple[0].id}>
                <Col onClick={_ => handleApplicationTabClick(tuple[0])}>
                    <ApplicationTag id={tuple[0].id} name={tuple[0].name}/>
                </Col>
                <Col onClick={_ => handleApplicationTabClick(tuple[1])}>
                    {tuple[1] ? <ApplicationTag id={tuple[1].id} name={tuple[1].name}/> : null}
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

