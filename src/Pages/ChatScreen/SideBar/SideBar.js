import React from 'react';

function SideBar(props) {
    let chatSetter = props.chatSetter;

    function selectChat(event){
        chatSetter("mike");
    }

    /*
    TODO:
    1. create component of elemt
    2. each has function that changes the setter
    */


    return (
        <>
            this is the side bar
            <button onClick={selectChat}>click</button>
        </>
    )
}

export default SideBar;