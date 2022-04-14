import React from 'react';
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
            <>
                <img className='openImage' src='https://www.reddit.com/r/CatGifs/comments/48sql9/hacker_cat_at_it_again_taking_over_the_webs/' alt='' />;
            </>
        )
    }

    return (
        <>
            <div className='top-bar'>
                <img src={user.img} alt='' />
                <p>{user.nickname}</p>
                <i className="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#AddContactModal" />
                <AddContact id="AddContactModal" tabindex="-1" aria_labelledby="AddContactModalLabel" aria_hidden="true" />
            </div>
            <div className='contacts-list scroll--simple'>
                {chatContext.contacts.map(username =>
                    <SideBarItem key={username} username={username} />
                )}
            </div>
        </>
    )
}

export default SideBar;