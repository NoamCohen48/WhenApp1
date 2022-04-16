import React, { useState } from 'react';
import SideBarItem from './SideBarItem.js';
import './SideBar.css'
import AddContact from './AddContact';
import { useChatContext } from '../../../Contexts/ChatContextProvider.js';
import { useUserContext } from '../../../Contexts/UserContextProvider.js';

function SideBar(props) {
    const userContext = useUserContext()
    let user = userContext.curUser;

    const [contacts, setContacts] = useState(userContext.curUser.contacts);

    const addContact = (username) => {
        setContacts((prev) => {
            return prev.concat(username);
        })
    }

    /*
    TODO:
    1. create component of items
    2. list as column flexbox
    3. each has function that changes the setter
    4. fetch contacts
    5. design top bar
    */

    // if (chatContext.contacts === undefined) {
    //     return (
    //         <>
    //             <img className='openImage' src='https://www.reddit.com/r/CatGifs/comments/48sql9/hacker_cat_at_it_again_taking_over_the_webs/' alt='' />;
    //         </>
    //     )
    // }

    return (
        <>
            <div className='top-bar'>
                <img src={user.img} alt='' />
                <div className='user-info'>
                    <p>{user.nickname}</p>
                    <p>{user.username}</p>
                </div>
                <i className="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#AddContactModal" />
                <AddContact id="AddContactModal" tabindex="-1" aria_labelledby="AddContactModalLabel" aria_hidden="true" contacts={contacts} addContact={addContact}/>
            </div>
            <div className='contacts-list scroll--simple'>
                {contacts.map(username =>
                    <SideBarItem key={username} username={username} />
                )}
            </div>
        </>
    )
}

export default SideBar;