import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import allActions from '../../redux/actions';

const User = () => {

    const [user, setUser] = useState({});
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const foundUser = users.find((user) => user.id === id);
        if (foundUser) {
            setUser(foundUser)
        }
    }, [users, id]);

    const userStateHandler = (userID) => {
        dispatch(allActions.usersActions.toggleUser(userID));
    };

    const userDeleteHandler = (userID) => {
        dispatch(allActions.usersActions.deleteUser(userID));
        history.push('/');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>User: {user.name}</h1>
                    <h3>Title: {user.title}</h3>
                    <h4>Status: {user.active ? "Active" : "Not Active"}</h4>
                    <h6>Description:</h6>
                    <p>{user.info}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" className={`btn ${user.active ? "btn-outline-secondary" : "btn-outline-primary"}`} onClick={() => userStateHandler(user.id)}>
                        {user.active ? "Deactivate" : "Activate"}
                    </button>
                    <button type="button" className="btn btn-danger mx-3" onClick={() => userDeleteHandler(user.id)}>
                        Delete
                    </button>
                </Col>
            </Row>
        </Container>
    )
};

export default User;