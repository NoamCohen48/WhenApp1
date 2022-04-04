import React from 'react';

function SideBarItem(props) {
    let chatSetter = props.chatSetter;
    let person = props.person;

    function selectChat(event){
        chatSetter(person);
    }

    /*
    TODO:
    1. create the item and set on click
    */

    return(
        <>
            <button onClick={selectChat}>{person}</button>
        </>
    )
}

export default SideBarItem;