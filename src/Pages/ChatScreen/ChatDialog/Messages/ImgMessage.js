import React from 'react';

function ImgMessage(props) {
    let className = props.className.concat(' ', props.message.iSent ? ' my-message' : ' other-message');
    return(
        <>
                <div className={className}>
                    <img src={props.message.data}/>
                    <p>{props.message.date}</p>
                </div>
        </>
    )
}

export default ImgMessage;