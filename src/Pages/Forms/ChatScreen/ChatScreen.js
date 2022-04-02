import React from 'react';
import { useLocation } from 'react-router-dom';


function ChatScreen(props) {
    let location = useLocation();
    let { username } = location.state

    return(
        <>
            <h1>This is the Chat Room</h1>
            <h2>user: {username}</h2>
        </>
    )
}

export default ChatScreen;