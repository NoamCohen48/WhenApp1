import React, { useRef, useState } from 'react';
import { useChatContext } from '../../../../Components/ContextProvider/ChatContextProvider';
import { addMessage } from '../../../../db/messages.js';
import './BottomBar.css'

function BottomBar(props) {
    let chatContext = useChatContext();
    let inputText = useRef();
    const [addon, setAddon] = useState(false);

    function sendMessage() {
        let text = inputText.current.value;

        // TODO: add Message
        // TODO: enter to send
        addMessage(chatContext.curChat, true, 'text', text, Date());
        props.update();

        inputText.current.value = ''
    }

    return (
        <>
            <i className="bi bi-image"></i>
            <i className="bi bi-camera-video"></i>
            <i className="bi bi-mic"></i>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" ref={inputText} />
                <span className="input-group-text" id="basic-addon2" onClick={sendMessage}><i className="bi bi-send"></i></span>
            </div>

        </>
    )
}

export default BottomBar;