import React, { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../../../../db/users.js';

import { receiveMessages } from '../../../../db/messages.js';
import TextMessage from '../../ChatDialog/Messages/TextMessage';
import AudioMessage from '../../ChatDialog/Messages/AudioMessage';
import VideoMessage from '../../ChatDialog/Messages/VideoMessage';
import ImgMessage from '../../ChatDialog/Messages/ImgMessage';


function MessgaesConteiner(props) {
    if (props.CurrentChat === undefined) {
        return <h1>loading</h1>;
    }

    let person = findPerson({ username: props.CurrentChat })[0];


    let messages = receiveMessages(person.username)

    if (messages === undefined) {
        return (
            <h1>Empry</h1>
            )
    }
    let index = 0;

    return(
        <>
            {
                messages.map(message => {

                    if(message.type === "text") {
                        <TextMessage message={message}/>
                    }
                    if(message.type === "audio") {
                        <AudioMessage message={message}/>
                    }
                    if(message.type === "video") {
                        <VideoMessage message={message}/>
                    }
                    if(message.type === "img") {
                        <ImgMessage message={message}/>
                    }
                    return <h1 key={index++}>{message.data}</h1>;


                    })
            }
        </>
    )
}

export default MessgaesConteiner;