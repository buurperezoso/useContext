import React, { createContext, useEffect, useReducer } from 'react';
import { USERS } from '../../constants';
import usersReducer from '../../hooks/userReducer';

const UsersContext = createContext([[], () => { }]);

const UseContextProvider = ({ children }) => {

    const [users, dispatch] = useReducer(usersReducer, []);

    useEffect(() => {
        dispatch({
            type: 'SET',
            users: USERS
        });
    }, []);

    return (
        <UsersContext.Provider value={[users, dispatch]}>
            {
                children
            }
        </UsersContext.Provider>
    )
};

export { UseContextProvider, UsersContext };