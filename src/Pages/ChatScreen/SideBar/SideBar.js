import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../Contexts/UserContextProvider.js';
import { addMessage, reset, resetMessages } from '../../../db/messages.js';
import AddContact from './AddContact';
import './SideBar.css';
import SideBarItem from './SideBarItem.js';

function SideBar(props) {
    const userContext = useUserContext()
    let user = userContext.curUser;

    const [contacts, setContacts] = useState(userContext.curUser.contacts);

    const addContact = (username) => {
        setContacts((prev) => {
            return prev.concat(username);
        })
    }

    useEffect(() => {
        console.log(contacts)
        setContacts([])
        resetMessages();

        if (user.username === 'admin') {
            setContacts((prev) => {
                return prev.concat('mike', 'jhon', 'world');
            })

            addMessage("mike", true, "text", "hello there mike?", new Date());
            addMessage("mike", false, "text", "yeah", new Date());
            addMessage("jhon", true, "text", "bla", new Date());
        }

        console.log('reseted', contacts)


    }, [userContext.curUser])

    // useEffect(() => {
    //     if (user.username === 'admin') {
    //         setContacts((prev) => {
    //             return prev.concat('mike', 'jhon', 'world');
    //         })

    //         addMessage("mike", true, "text", "hello there mike?", new Date());
    //         addMessage("mike", false, "text", "yeah", new Date());
    //         addMessage("jhon", true, "text", "bla", new Date());
    //     }
    // }, [])


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
                <AddContact id="AddContactModal" tabindex="-1" aria_labelledby="AddContactModalLabel" aria_hidden="true" contacts={contacts} addContact={addContact} />
            </div>
            <div className='contacts-list scroll--simple list-group'>
                {contacts.map(username =>
                    <SideBarItem key={username} username={username} />
                )}
            </div>
        </>
    )
}

export default SideBar;