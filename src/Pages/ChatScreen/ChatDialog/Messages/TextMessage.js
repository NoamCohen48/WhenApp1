import React from 'react';

function TextMessage(props) {
    let className = props.className.concat(' ', props.message.iSent ? ' my-message' : ' other-message');
    return(
        <>
                <div className={className}>
                    <p>{props.message.data}</p>
                    <p>{props.date.toDateString()}</p>
                </div>
        </>
    )
}

export default TextMessage;