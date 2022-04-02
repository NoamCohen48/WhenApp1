import React from 'react';

function Container(props) {
    return(
        <>
            <div className={"container-lg container-" + props.size + ' ' + props.className}>
                {props.children}
            </div>
        </>
    )
}

export default Container;