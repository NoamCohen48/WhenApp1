import React from 'react';
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';
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
                <h1>tob bar</h1>
            </div>
            <div className='messages-conteiner'>
                <h1>messages</h1>
            </div>
            <div className='bot-bar'>
                <h1>bot</h1>
            </div>
        </>
    )
}

export default DialogScreen;