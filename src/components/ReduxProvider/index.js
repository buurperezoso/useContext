import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import constants from '../../constants';

const ReduxProvider = ({ children }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.usersActions.setUsers(constants.mockUsers));
    }, []);

    return (
        <>
            {children}
        </>
    )
};

export default ReduxProvider;