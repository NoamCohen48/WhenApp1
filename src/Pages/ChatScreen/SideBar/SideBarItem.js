import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function SideBarItem(props) {
    let person = props.person;
    let ChatContext = useChatContext();

    function selectChat(event){
        ChatContext.setCurChat(person);
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