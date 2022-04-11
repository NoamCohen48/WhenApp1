import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import BottomBar from './dialogParts/BottomBar';
import MessgaesConteiner from './dialogParts/MessgaesConteiner.js';
import TopBar from './dialogParts/TopBar';
import './DialogScreen.css'

function DialogScreen(props) {
    let ChatContext = useChatContext();
    
    /*
    TODO:
    1. add placeholder
    2. add messeges (4 types)
    3. fetch info from db using useEffect
    */

    return (
        <>
            <div className='top-bar'>
                <TopBar CurrentChat={ChatContext.curChat}/>
            </div>
            <div className='messages-conteiner'>
                <MessgaesConteiner CurrentChat={ChatContext.curChat}/>
            </div>
            <div className='bot-bar'>
                <BottomBar />
            </div>
        </>
    )
}

export default DialogScreen;