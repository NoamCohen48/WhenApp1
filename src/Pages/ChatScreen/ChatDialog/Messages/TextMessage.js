import React from 'react';

function TextMessage(props) {
    let className = props.className.concat(' ', props.message.iSent ? ' my-message' : ' other-message');

    let contect;
    switch (props.message.type) {
        case 'text':
            contect = <p>{props.message.data}</p>
            break;
        case 'audio':
            break
        case 'video':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        case 'img':
            contect = <img src={props.message.data} alt='alt text' />
            break
        default:
            <p>Unkown Type</p>
    }

    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let dateStr = `${hour}:${minutes}, ${year}/${month}/${day}`;

    return (
        <>
            <div className={className}>
                {contect}
                <p className='date'>{dateStr}</p>
            </div>
        </>
    )
}

export default TextMessage;