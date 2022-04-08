import React, { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../../db/users';

const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

function ChatContextProvider(props) {
    const [contacts, setContacts] = useState(undefined);
    const [curChat, setCurChat] = useState(undefined);
    const [curUser, setCurUser] = useState(undefined);
    
    // fetching info when a new user entred
    function userEntered(username) {
        localStorage.setItem('user', username)

        setCurUser(()=>{
            // getting username from db
            let user = findPerson({ "username": username })[0];

            // setting the contacts
            setContacts(() => {
                let contact = user.contacts;

                return contact;
            });

            
            return user;
        })
    }

    function addContact(username) {
        setContacts((prevContacts) => {
            return prevContacts.concat(username);
        })
    }

    let context = {
        curUser: curUser,
        setCurUser: setCurUser,
        userEntered: userEntered,
        contacts: contacts,
        setContacts: setContacts,
        addContact: addContact,
        curChat: curChat,
        setCurChat: setCurChat,
    }

    return (
        <ChatContext.Provider value={context}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;