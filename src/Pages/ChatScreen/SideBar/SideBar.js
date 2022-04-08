import React, { useEffect, useState } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import SideBarItem from './SideBarItem';
import './SideBar.css'

function SideBar(props) {
    let chatContext = useChatContext();
    let user = chatContext.curUser;

    // useEffect(() => {
    //     setContacts((prevContacts) => {
    //         return chatContext.contacts;
    //     })
    // }, []);

    /*
    TODO:
    1. create component of items
    2. list as column flexbox
    3. each has function that changes the setter
    4. fetch contacts
    5. design top bar
    */

    function addContact() {

    }


    if (chatContext.contacts === undefined) {
        return (
            <h1>
                Loading
            </h1>
        )
    }

    return (
        <>
            <div className='top-bar'>
                <img src={user.img} />
                <p>{user.nickname}</p>
                <i className="bi bi-person-plus" onClick={addContact} />
            </div>
            <div className='contacts-list styled-scrollbars'>
                {chatContext.contacts.map(username =>
                    <SideBarItem key={username} username={username} />
                )}
            </div>
        </>
    )
}

export default SideBar;