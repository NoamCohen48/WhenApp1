import React, { useEffect, useRef, useState } from 'react';
import { useChatContext, useRenderContext } from '../../../../Components/ContextProvider/ChatContextProvider';
import { addMessage } from '../../../../db/messages.js';
import useRecorder from '../../../../Hooks/RecorderHook';
import './BottomBar.css'

function BottomBar(props) {
    let chatContext = useChatContext();
    let inputText = useRef();

    const uploudButtonImg = useRef();
    const uploudButtonVideo = useRef();
    const recorderBtn = useRef();

    let {forceUpdate} = useRenderContext()
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    function onKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    function sendMessage() {
        let text = inputText.current.value;

        if (text === '') {
            return;
        }

        addMessage(chatContext.curChat, true, 'text', text, new Date());
        forceUpdate()

        inputText.current.value = ''
    }

    function handleChangeImg(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        addMessage(chatContext.curChat, true, 'img', file, new Date());
        forceUpdate()
        // props.update();
    }

    useEffect(() => {
        if (audioURL === '') {
            return;
        }

        addMessage(chatContext.curChat, true, 'audio', audioURL, new Date());
        forceUpdate()
    }, [audioURL])

    function handleChangeVideo(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        addMessage(chatContext.curChat, true, 'video', file, new Date());
        forceUpdate()
    }

    function micClick() {
        if (isRecording) {
            stopRecording();
        }
        else {
            startRecording()
        }
    }

    return (
        <>
            <i className="bi bi-image" onClick={(event) => { uploudButtonImg.current.click(event) }}></i>
            <i className="bi bi-camera-video" onClick={(event) => { uploudButtonVideo.current.click(event) }}></i>
            <div className={`recorder text-center ${isRecording ? ' recording' : ''}`} ref={recorderBtn} onClick={micClick}>
                <i className="bi bi-mic" disabled={isRecording} ></i>
                <i className="bi bi-record-fill" disabled={!isRecording}></i>
            </div>

            {/* <audio src={audioURL} controls /> */}

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