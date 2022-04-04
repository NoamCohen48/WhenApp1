import React from 'react';

function DialogScreen(props) {
    let curChatWith = props.curChatWith; // username

    /*
    TODO:
    1. add placeholder
    2. add messeges (4 types)
    3. fetch info from db using useEffect
    */

    return(
        <>
            this is a dialog screen
            cur chat {curChatWith}
        </>
    )
}

export default DialogScreen;