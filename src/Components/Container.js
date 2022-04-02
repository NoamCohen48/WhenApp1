import React from 'react';

function Container(props) {
    console.log(props);
    return(
        <>
            <div className={"container-lg container-" + props.size + ' ' + props.className}>
                {props.children}
            </div>
        </>
    )
}

export default Container;