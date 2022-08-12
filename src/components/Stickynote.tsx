import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';
import Box from '@mui/material/Box';
import '../stlyes/Stickynote.css';
import {Note} from '../redux/types';
import { StickynotesContext } from './StickynoteProvider';

export const Stickynote = (props: Note) => {
    const [CurrentNoteinfo, setCurrentNoteinfo] = React.useState({
      id: props.id,
      content: props.content,
      pos: props.pos,
      color:props.color
    })
    const {StickynotesInfo, deleteStickynoteInfo, changeStickynoteContent} = useContext(StickynotesContext)

    const handleChange = (id:number, value: string) => {
      changeStickynoteContent(id, value);
      //Content only some changes
      //setCurrentNoteinfo(prevtextState => ({...prevtextState, content: value}))
    };

    const onStop = (e: DraggableEvent, data: DraggableData) => {
      // click
      console.log("droped");
      console.log(CurrentNoteinfo.id);
      //Pos only some changes
      setCurrentNoteinfo(prevposState => ({...prevposState, pos: [data.x, data.y]}));
      if ((data.x >= -90 && data.x <= 75) && (data.y >= 25 && data.y <= 75)){
        DeleteNote()
      }
    };

    const DeleteNote = () => {
      console.log("deleted")
      deleteStickynoteInfo(CurrentNoteinfo.id)
      console.log(StickynotesInfo)
    }

      return (
        <>
        <Draggable handle="strong" defaultPosition={{x: CurrentNoteinfo.pos[0], y: CurrentNoteinfo.pos[1]}} onStop={onStop}> 
              <div className='box' style={{position: 'absolute'}}>
                <Box sx={{
                width: 150,
                height: 150,
                backgroundColor: CurrentNoteinfo.color,
                }} >

                  <strong >
                    <div className="drag-box"></div>
                  </strong>
                  <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={5}
                    color="warning"
                    defaultValue={CurrentNoteinfo.content}
                    variant="standard"
                    onChange={(e) => handleChange(CurrentNoteinfo.id, e.target.value)}
                  />

                </Box>
              </div>
        </Draggable>
        </>
      );
}