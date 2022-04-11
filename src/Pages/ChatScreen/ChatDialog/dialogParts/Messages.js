import React, { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { findPerson } from '../../../../db/users.js';

import { receiveMessages } from '../../../../db/messages.js';


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
                messages.map(message => <h1 key={index++}>{message.data}</h1>)
            }
        </>
    )
}

export default MessgaesConteiner;