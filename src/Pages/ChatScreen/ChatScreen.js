import React from 'react';
import { useLocation } from 'react-router-dom';

import './ChatScreen.css'
import DialogScreen from './DialogScreen';
import SideBar from './SideBar';

function ChatScreen(props) {
    let location = useLocation();
    let { username } = location.state

    return (
        <>
            <div className='container-lg container-large c-shadow'>
                <div className='row'>
                    <div className="col-4 side-bar" >
                        <SideBar />
                    </div>
                    <div className="col-8 dialog-screen" >
                        <DialogScreen />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatScreen;