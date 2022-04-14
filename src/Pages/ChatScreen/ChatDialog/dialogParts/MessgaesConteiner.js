import React, { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../../../../db/users.js';

import { receiveMessages } from '../../../../db/messages.js';
import TextMessage from '../Messages/TextMessage';
import AudioMessage from '../Messages/AudioMessage';
import VideoMessage from '../Messages/VideoMessage';
import ImgMessage from '../Messages/ImgMessage';
import "../Messages/Messgaes.css"


function MessgaesConteiner(props) {
    if (props.CurrentChat === undefined) {
        return <h1>loading</h1>;
    }

    let person = findPerson({ username: props.CurrentChat })[0];


    let messages = receiveMessages(person.username)

    if (messages === undefined) {
        return (
            <h1>Empty</h1>
        )
    }

    console.log("messages", messages)
    return (
        <>
            {
                messages.map(message => {
                    return <TextMessage className="message" message={message} />
                })
            }
        </>
    )
}

export default MessgaesConteiner;