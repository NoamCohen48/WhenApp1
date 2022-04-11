import React, { useState, useCallback } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import { receiveMessages } from '../../../db/messages';
import { findPerson } from '../../../db/users';
import BottomBar from './dialogParts/BottomBar';
import MessgaesConteiner from './dialogParts/Messages';
import TopBar from './dialogParts/TopBar';
import './DialogScreen.css'


function DialogScreen(props) {
    let ChatContext = useChatContext();
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    /*
    TODO:
    1. add placeholder
    2. add messeges (4 types)
    3. fetch info from db using useEffect
    */

    return (
        <>
            <div className='top-bar'>
                <TopBar CurrentChat={ChatContext.curChat} />
            </div>
            <div className='messages-conteiner'>
                <MessgaesConteiner CurrentChat={ChatContext.curChat}/>
            </div>
            <div className='bot-bar'>
                <BottomBar update={forceUpdate}/>
            </div>
        </>
    )
}

export default DialogScreen;