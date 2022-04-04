import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ChatScreen.css'
import DialogScreen from './ChatDialog/DialogScreen.js';
import SideBar from './SideBar/SideBar.js';

function ChatScreen(props) {
    let location = useLocation();
    let { username } = location.state;

    // TODO: change to use provider
    const [curChatWith, setCurChatWith] = useState()

    return (
        <>
            <div className='container-lg container-large c-shadow'>
                <div className='row'>
                    <div className="col-4 side-bar" >
                        <SideBar username={username} chatSetter={setCurChatWith} />
                    </div>
                    <div className="col-8 dialog-screen" >
                        <DialogScreen username={username} curChatWith={curChatWith} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatScreen;