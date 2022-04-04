import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ChatScreen.css'
import DialogScreen from './DialogScreen';
import SideBar from './SideBar';

function ChatScreen(props) {
    let location = useLocation();
    let { username } = location.state

    const [curChatWith, setCurChatWith] = useState()

    return (
        <>
            <div className='container-lg container-large c-shadow'>
                <div className='row'>
                    <div className="col-4 side-bar" >
                        <SideBar chatSetter={setCurChatWith} />
                    </div>
                    <div className="col-8 dialog-screen" >
                        <DialogScreen curChatWith={curChatWith} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatScreen;