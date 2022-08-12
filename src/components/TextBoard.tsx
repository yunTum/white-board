import React from "react"; 
import { DraggableTextField } from "./DraggableTextField";
import { useEffect, useRef, useContext} from 'react';
import { DraggableTextContext } from './DraggableTextProvider'

export const TextBoard = () => {  
    const {DraggableTextInfo} = useContext(DraggableTextContext)
    const isFirstRender = useRef(false)
    useEffect(() => { // first render
        isFirstRender.current = true
      }, [])
    
    return (
        <>         
            {
            DraggableTextInfo.map((text, key) =>
            <DraggableTextField {
                        ...{
                            id:text.id,
                            content:text.content,
                            pos: [text.pos[0], text.pos[1]],
                        }} key={text.id}/> 
            )
            }
        </>
        
    )
}