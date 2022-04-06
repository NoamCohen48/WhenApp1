import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import { findPerson } from '../../../db/users';


function SideBarItem(props) {
    let username = props.username;
    let ChatContext = useChatContext();

    function selectChat(event) {
        ChatContext.setCurChat(username);
    }

    let person = findPerson({ username: username })[0];

    if (person === undefined) {
        person = {
            'username': username,
            'nickname': username + " dafault",
            'password': "secret password",
            'img': "https://api.time.com/wp-content/uploads/2019/08/caveman-spongebob-spongegar.png",
            'contacts': []
        }
    }
    /*
    TODO:
    1. create the item and set on click
    2. fix design
    */

    return (
        <div className='contact-item' onClick={selectChat}>
            <img src={person.img} />
            <div className='item-text'>
                <p>{person.nickname}</p>
                <p>last chat</p>
            </div>
        </div>
    )
}

export default SideBarItem;