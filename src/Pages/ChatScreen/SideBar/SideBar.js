import React from 'react';
import SideBarItem from './SideBarItem';

function SideBar(props) {

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
            <SideBarItem person={"mike"} />
            <br></br>
            <SideBarItem person={"jhon"}  />

        </>
    )
}

export default SideBar;