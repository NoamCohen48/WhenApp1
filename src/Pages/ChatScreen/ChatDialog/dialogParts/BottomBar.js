import React, { useRef, useState } from 'react';
import { useChatContext } from '../../../../Components/ContextProvider/ChatContextProvider';
import { addMessage } from '../../../../db/messages.js';
import './BottomBar.css'

function BottomBar(props) {
    let chatContext = useChatContext();
    let inputText = useRef();
    const [addon, setAddon] = useState(false);
    
    const uploudButton = useRef();


    function sendMessage() {
        let text = inputText.current.value;

        if (text === '') {
            return;
        }

        // TODO: add Message
        // TODO: enter to send
        addMessage(chatContext.curChat, true, 'text', text, Date());
        props.update();

        inputText.current.value = ''
    }

    function onKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    function handleChangeImg(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        addMessage(chatContext.curChat, true, 'img', file, Date());       
        props.update();

        inputText.current.value = ''

    }

    function handleChangeMic(event) {

        addMessage(chatContext.curChat, true, 'audio', "audio", Date());
        props.update();

        inputText.current.value = ''
        
    }

    function handleChangeVideo(event) {

        let file = URL.createObjectURL(event.target.files[0]);
        addMessage(chatContext.curChat, true, 'video', file, Date());  
        props.update();

        inputText.current.value = ''
        
    }

    return (
        <>
            <i className="bi bi-image" onClick={(event)=>{uploudButton.current.click(event)}}></i>
            <i className="bi bi-camera-video" onClick={handleChangeVideo}></i>
            <i className="bi bi-mic" onClick={handleChangeMic}></i>

            <div className="input-group">
                <input type="text" className="form-control" onKeyDown={onKeyPress} placeholder="Enter Message" aria-label="Recipient's username" aria-describedby="basic-addon2" ref={inputText} />
                <span className="input-group-text" id="basic-addon2" onClick={sendMessage}><i className="bi bi-send"></i></span>
            </div>

            <input className="file-upload hidden" type="file" accept="image/*" ref={uploudButton} onChange={handleChangeImg}></input>


        </>
    )
}

export default BottomBar;