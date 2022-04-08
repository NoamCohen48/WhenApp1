import React, { useContext } from 'react';
import { createContext, useState } from 'react';

const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

function ChatContextProvider(props) {
    const [contacts, setContacts] = useState(undefined);
    const [curChat, setCurChat] = useState(undefined);
    const [curUser, setCurUser] = useState(undefined);

    function addContact(username) {
        setContacts((prevContacts) => {
            return prevContacts.concat(username);
        })
    }

    let context = {
        curUser: curUser,
        setCurUser: setCurUser,
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