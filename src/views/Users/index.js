import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { UsersContext } from '../../components/useContextProvider';

const Users = () => {

    const history = useHistory();
    const [users] = useContext(UsersContext);
    return (
        <Container className="mt-4">
            {
                users.map((user, index) => (
                    <Row key={index}>
                        <Col className="mt-2" style={{ border: `3px solid ${user.active ? 'green' : 'red'}` }}>
                            <button className="btn w-100" onClick={() => history.push(`user/${user.id}`)}>
                                <h3>Name: {user.name}</h3>
                                <h6>Title: {user.title}</h6>
                            </button>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    )
};

export default Users;