import React, { useEffect, useRef, useState } from 'react';
import { useChatContext } from '../../../../Components/ContextProvider/ChatContextProvider';
import { addMessage } from '../../../../db/messages.js';
import useRecorder from '../../../../Hooks/RecorderHook';
import './BottomBar.css'

function BottomBar(props) {
    let chatContext = useChatContext();
    let inputText = useRef();
    const [addon, setAddon] = useState(false);

    const uploudButtonImg = useRef();
    const uploudButtonVideo = useRef();

    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();



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


    }

    useEffect(() => {
        addMessage(chatContext.curChat, true, 'audio', audioURL, Date());
        props.update();
    }, [audioURL])

    function handleChangeVideo(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        addMessage(chatContext.curChat, true, 'video', file, Date());
        props.update();
    }

    return (
        <>
            <i className="bi bi-image" onClick={(event) => { uploudButtonImg.current.click(event) }}></i>
            <i className="bi bi-camera-video" onClick={(event) => { uploudButtonVideo.current.click(event) }}></i>
            <div className='recorder'>
                <i className="bi bi-mic" onClick={startRecording} disabled={isRecording} ></i>
                <i className="bi bi-record-fill" onClick={stopRecording} disabled={!isRecording}></i>
            </div>

            <audio src={audioURL} controls />

            <div className="input-group">
                <input type="text" className="form-control" onKeyDown={onKeyPress} placeholder="Enter Message" aria-label="Recipient's username" aria-describedby="basic-addon2" ref={inputText} />
                <span className="input-group-text" id="basic-addon2" onClick={sendMessage}><i className="bi bi-send"></i></span>
            </div>

            <input className="file-upload hidden" type="file" accept="image/*" ref={uploudButtonImg} onChange={handleChangeImg}></input>
            <input className="file-upload hidden" type="file" accept="video/*" ref={uploudButtonVideo} onChange={handleChangeVideo}></input>

        </>
    )
}

export default BottomBar;