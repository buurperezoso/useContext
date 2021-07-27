import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { UsersContext } from '../../components/useContextProvider';

const User = () => {

    const [user, setUser] = useState({});
    const users = useContext(UsersContext);
    const { id } = useParams();

    useEffect(() => {
        const foundUser = users.find((user) => user.id == id);
        if (foundUser) {
            setUser(foundUser)
        }
    }, [])

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Row>
                <Col>
                    <h1>User: {user.name}</h1>
                    <h3>Title: {user.title}</h3>
                    <h4>Status: {user.active ? "Active" : "Not active"}</h4>
                    <h6>Description:</h6>
                    <p>{user.info}</p>
                </Col>
            </Row>
        </Container>
    )
};

export default User;