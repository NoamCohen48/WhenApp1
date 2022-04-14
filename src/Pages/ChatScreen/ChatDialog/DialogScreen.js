import React, { useState, useCallback } from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
import BottomBar from './dialogParts/BottomBar';
import MessgaesConteiner from './dialogParts/MessgaesConteiner.js';
import TopBar from './dialogParts/TopBar';


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
                <BottomBar update={forceUpdate}/>
            </div>
        </>
    )
}

export default DialogScreen;