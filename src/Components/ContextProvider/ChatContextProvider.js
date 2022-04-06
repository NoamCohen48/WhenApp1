import React, { useContext } from 'react';
import { createContext, useState } from 'react';

const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

function ChatContextProvider(props) {
    const [contacts, setContacts] = useState([]);
    const [curChat, setCurChat] = useState();

    function addContact(username) {
        setContacts((prevContacts) => {
            return prevContacts.concat(username);
        })
    }

    let context = {
        contacts: contacts,
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