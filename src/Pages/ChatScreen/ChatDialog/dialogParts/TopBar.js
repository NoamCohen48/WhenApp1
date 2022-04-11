import React from 'react';
import { findPerson, registerPerson } from '../../../../db/users.js'
import "./TopBar.css"


function TopBar(props) {
    let person = findPerson({ username: props.CurrentChat })[0];


    return (
        <>

            <div className="chat-about">
                <img className="avatar" src={person.img} />
                <h1 className="name">{props.CurrentChat}</h1>
            </div>


        </>
    )
}

export default TopBar;
