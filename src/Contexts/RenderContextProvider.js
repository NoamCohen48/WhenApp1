import React, { useContext, useEffect, useCallback, useReducer } from 'react';
import { createContext, useState } from 'react';

const RenderContext = createContext();

export function useRenderContext() {
    return useContext(RenderContext);
}

export function RenderContextProvider(props) {
    const [state, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    return (
        <RenderContext.Provider value={{forceUpdate}} >
            {props.children}
        </RenderContext.Provider>
    )
}