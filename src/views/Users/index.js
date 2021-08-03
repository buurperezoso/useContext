import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Users = () => {
    const users = useSelector(state => state.usersReducer.users)
    const history = useHistory();
    return (
        <Container className="mt-4">
            {
                users.map((user, index) => (
                    <Row key={index}>
                        <Col className="mt-2" style={{ border: `3px solid ${user.active ? 'green' : 'red'}`, borderRadius: '1rem' }}>
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