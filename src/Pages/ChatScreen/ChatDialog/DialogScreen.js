import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function DialogScreen(props) {
    let ChatContext = useChatContext();

    /*
    TODO:
    1. add placeholder
    2. add messeges (4 types)
    3. fetch info from db using useEffect
    */

    return(
        <>
            this is a dialog screen
            cur chat {ChatContext.curChat}
        </>
    )
}

export default DialogScreen;