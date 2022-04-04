import React from 'react';
import SideBarItem from './SideBarItem';

function SideBar(props) {
    let chatSetter = props.chatSetter;

    function selectChat(event){
        chatSetter("mike");
    }

    /*
    TODO:
    1. create component of items
    2. list as column flexbox
    3. each has function that changes the setter
    */


    return (
        <>
            this is the side bar
            <br></br>
            <SideBarItem person={"mike"} chatSetter={chatSetter} />
            <br></br>
            <SideBarItem person={"jhon"} chatSetter={chatSetter} />

        </>
    )
}

export default SideBar;