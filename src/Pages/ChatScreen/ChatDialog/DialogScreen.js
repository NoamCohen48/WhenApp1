import React, { useState, useCallback } from 'react';
import { useChatContext } from '../../../Contexts/ChatContextProvider';
import BottomBar from './dialogParts/BottomBar';
import MessgaesConteiner from './dialogParts/MessgaesConteiner.js';
import TopBar from './dialogParts/TopBar';


function DialogScreen(props) {
    let ChatContext = useChatContext();

    /*
    TODO:
    3. fetch info from db using useEffect
    */

    if (ChatContext.curChat === undefined) {
        return <img className='openImage' src='https://media3.giphy.com/media/12B39IawiNS7QI/giphy.gif?cid=790b7611ec1e7822201342c1c07e3c9b78cdc818ee32314c&rid=giphy.gif&ct=g' alt='' />;
    }

    return (
        <>
            <div className='top-bar'>
                <TopBar CurrentChat={ChatContext.curChat} />
            </div>
            <div className='messages-conteiner scroll--simple'>
                <MessgaesConteiner CurrentChat={ChatContext.curChat}/>
            </div>
            <div className='bot-bar'>
                <BottomBar />
            </div>
        </>
    )
}

export default DialogScreen;