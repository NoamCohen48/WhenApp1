import React, { useContext, useEffect, useCallback, useReducer } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../db/users';
import { RenderContextProvider } from './RenderContextProvider';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider(props) {
    const [curUser, setCurUser] = useState(undefined);

    useEffect(() => {
        let usernameStorage = localStorage.getItem('username');
        if (!usernameStorage) {
            return;
        }

        let user = findPerson({ username: usernameStorage })[0];

        if (!user) {
            return
        }

        setCurUser(user)
    }, [])

    // fetching info when a new user entred
    function userEntered(username) {
        localStorage.setItem('username', username)

        setCurUser(findPerson({ username: username })[0])
    }

    return (
        <UserContext.Provider value={{ curUser, userEntered }} >
            {props.children}
        </UserContext.Provider>
    )
}