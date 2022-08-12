import React from "react"; 
import {Stickynote} from "./Stickynote"
import { useEffect, useRef, useState, useContext} from 'react'
import { Note } from '../redux/types'
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { StickynotesContext } from './StickynoteProvider'

// export const Notes: Array<Note> = [{
//             id: new Date().getTime(),
//             content:'This is a sticky note',
//             pos: [300, -500],
//             color:'#fcf5dd'
//         }]

export const NoteBoard = () => {  
    const {StickynotesInfo, addStickynoteInfo} = useContext(StickynotesContext)
    //const noteInfoState = useSelector((state: RootState) => state.notes)
    //const [CurrentNotes, setCurrentNotes] = useState<Array<Note>>(Notes) 

    // const Addnote = () =>{
    //     setCurrentNotes([
    //         {
    //             content:'Hello',
    //             pos: [100, -300],
    //             color:'#fcf5dd'
    //         }]
    //     );
    // }
    const isFirstRender = useRef(false)
    useEffect(() => { // first render
        isFirstRender.current = true
      }, [])

    useEffect(() => {
        console.log(...StickynotesInfo)
    }, [StickynotesInfo])
    return (
        <>  
            {
            StickynotesInfo.map((note, key) =>
            <Stickynote {
                        ...{
                            id:note.id,
                            content:note.content,
                            pos: [note.pos[0], note.pos[1]],
                            color:note.color
                        }} key={note.id}/> 
            )
            }
        </>
        
    )
}