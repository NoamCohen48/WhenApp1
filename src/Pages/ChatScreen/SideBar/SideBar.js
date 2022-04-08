import React, { useEffect, useState } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import SideBarItem from './SideBarItem';
import './SideBar.css'
import AddContact from './AddContact';

function SideBar(props) {
    const chatContext = useChatContext();
    let user = chatContext.curUser;

    /*
    TODO:
    1. create component of items
    2. list as column flexbox
    3. each has function that changes the setter
    4. fetch contacts
    5. design top bar
    */

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
                <i className="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#AddContactModal" />
                <AddContact id="AddContactModal" tabindex="-1" aria_labelledby="AddContactModalLabel" aria_hidden="true" />
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