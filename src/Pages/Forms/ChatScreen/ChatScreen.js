import React from 'react';
import { useLocation } from 'react-router-dom';


function ChatScreen(props) {
    let location = useLocation();
    let { username } = location.state

    return(
        <>
            
        </>
    )
}

export default ChatScreen;