import React, { useContext, useEffect, useCallback, useReducer } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../../db/users';

const ChatContext = createContext();
const RenderContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

export function useRenderContext() {
    return useContext(RenderContext);
}

function RenderContextProvider(props) {
    const [state, updateState] = useState(0);
    const forceUpdate = useCallback(() => updateState({}), []);

    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    return (
        <RenderContext.Provider value={{forceUpdate}} >
            {props.children}
        </RenderContext.Provider>
    )
}

function ChatContextProvider(props) {
    const [contacts, setContacts] = useState(undefined);
    const [curChat, setCurChat] = useState(undefined);
    const [curUser, setCurUser] = useState(undefined);

    useEffect(() => {
        let usernameStorage = localStorage.getItem('username');
        if (usernameStorage) {
            userEntered(usernameStorage);
        }
    }, [])

    // fetching info when a new user entred
    function userEntered(username) {
        localStorage.setItem('username', username)

        setCurUser(() => {
            // getting username from db
            let user = findPerson({ "username": username })[0];

            // setting the contacts
            setContacts(() => {
                let contact = user.contacts;

                return contact;
            });


            return user;
        })

        setCurChat(undefined);
    }

    function addContact(username) {
        setContacts((prevContacts) => {
            return prevContacts.concat(username);
        })
    }

    let context = {
        curUser: curUser,
        userEntered: userEntered,
        contacts: contacts,
        setContacts: setContacts,
        addContact: addContact,
        curChat: curChat,
        setCurChat: setCurChat,
    }

    const [, updateState] = useState(0);
    const forceUpdate = useCallback(() => updateState((prev) => prev + 1), []);

    return (
        <ChatContext.Provider value={context}>
            <RenderContextProvider>
                {props.children}
            </RenderContextProvider>
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;