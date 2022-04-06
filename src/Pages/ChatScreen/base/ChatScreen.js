import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ChatScreen.css'
import DialogScreen from '../ChatDialog/DialogScreen.js';
import SideBar from '../SideBar/SideBar.js';
import { findPerson } from '../../../db/users';

function ChatScreen(props) {
    let location = useLocation();
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        let username = location.state.username;
        setUser(() => {
            return findPerson({ "username": username })[0];
        })
    }, [])


    if (user === undefined) {
        return (
            <div className='container-lg container-large c-shadow'>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }

    return (
        <>
            <div className='container-lg container-large c-shadow'>
                <div className='row'>
                    <div className="col-4 side-bar" >
                        <SideBar />
                        {user.username}
                        {user.img}
                        <img src={user.img} alt="hello"></img>
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