import React, { useEffect, useState } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import SideBarItem from './SideBarItem';
import './SideBar.css'

function SideBar(props) {
    const [contacts, setContacts] = useState(undefined)
    let chatContext = useChatContext();

    useEffect(() => {
        setContacts((prevContacts) => {
            return chatContext.contacts;
        })
    }, []);

    /*
    TODO:
    1. create component of items
    2. list as column flexbox
    3. each has function that changes the setter
    4. fetch contacts
    5. design top bar
    */


    if (contacts === undefined) {
        return (
            <h1>
                Loading
            </h1>
        )
    }

    return (
        <>
            <div className='top-bar'>
                <h1>User info</h1>
            </div>
            <div className='contacts-list'>
                {contacts.map(username =>
                    <SideBarItem key={username} username={username} />
                )}
            </div>
        </>
    )
}

export default SideBar;