import React, { useContext, useEffect, useCallback, useReducer } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../db/users';
import { RenderContextProvider } from './RenderContextProvider';
import { UserContextProvider } from './UserContextProvider';

const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

function ChatContextProvider(props) {
    const [curChat, setCurChat] = useState(undefined);
    
    return (
        <ChatContext.Provider value={{curChat, setCurChat}}>
            <UserContextProvider>
                <RenderContextProvider>
                    {props.children}
                </RenderContextProvider>
            </UserContextProvider>
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;