import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import { receiveMessages } from '../../../db/messages';
import { findPerson } from '../../../db/users';


function SideBarItem(props) {
    let username = props.username;
    let ChatContext = useChatContext();

    function selectChat(event) {
        ChatContext.setCurChat(username);
    }

    let person = findPerson({ username: username })[0];

    let messages = receiveMessages(username)

    var lastMessage = messages[messages.length - 1];

    console.log(username, 'messages', lastMessage)
    let lastMessageText;
    let dateStr;

    if (lastMessage === undefined) {
        lastMessageText = '';
        dateStr = '';
    }
    else {
        switch (lastMessage.type) {
            case 'text':
                lastMessageText = lastMessage.data;
                break;
            case 'audio':
                lastMessageText = 'audio';
                break
            case 'video':
                lastMessageText = 'video';
                break;
            case 'img':
                lastMessageText = 'image';
                break
            default:
                lastMessageText = 'message';
        }

        const date = lastMessage.date;
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        dateStr = `${hour}:${minutes}, ${day}/${month}/${year}`;
    }

    /*
    TODO:
    1. create the item and set on click
    2. fix design
    */

    return (
        <div className='contact-item' onClick={selectChat}>
            <img src={person.img} alt='' />
            <div className='item-text'>
                <p>{person.nickname}</p>
                <div className='bottom-text'>
                    <p>{lastMessageText}</p>
                    <p>{dateStr}</p>
                </div>
            </div>
        </div>
    )
}

export default SideBarItem;