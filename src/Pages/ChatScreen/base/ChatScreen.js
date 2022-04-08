import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ChatScreen.css'
import DialogScreen from '../ChatDialog/DialogScreen.js';
import SideBar from '../SideBar/SideBar.js';
import { findPerson } from '../../../db/users';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function ChatScreen(props) {
    let location = useLocation();
    let chatContext = useChatContext();
    const [user, setUser] = useState(undefined);

    // fetching info
    useEffect(() => {
        let username = location.state.username;

        // setting username
        chatContext.setCurUser(() => {
            // getting username from db
            let user = findPerson({ "username": username })[0];

            // setting the contacts
            chatContext.setContacts(() => {
                let contact = user.contacts;

                // TODO: remove manual contacts
                contact.push("holt");
                contact.push("jason");
                contact.push("noam");
                contact.push("shaked");
                contact.push("roi");

                return contact;
            });

            return user;
        });
    }, []);


    // TODO: find a solution for fetching contacts, now doing it here, putting in context and extracting in side bar
    // Need a way to tell this parent that side bar is loading. 

    if (chatContext.curUser === undefined) {
        return (
            <div className='container-lg chat-container c-shadow'>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }

    return (
        <>
            <div className='container-lg chat-container c-shadow'>
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