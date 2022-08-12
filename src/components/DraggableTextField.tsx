import React, {useRef, useEffect, useContext} from 'react';
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';
import '../stlyes/DraggableTextField.css';
import { DraggableTextFieldInfo } from '../redux/types'
import { DraggableTextContext } from './DraggableTextProvider'

export const DraggableTextField = (props: DraggableTextFieldInfo) => {
  const {deleteDraggableTextInfo, changeDraggableTextContent} = useContext(DraggableTextContext)
  const [editMode, setEditMode] = React.useState(true);
  const [CurrentTextFieldinfo, setCurrentTextFieldinfo] = React.useState({
    id: props.id,
    content: props.content,
    pos: props.pos
  })

  const ChangeText = (id:number, value: string) =>{
    changeDraggableTextContent(id, value);
    setCurrentTextFieldinfo(preTextState => ({...preTextState, content:value}))
  }

  const inputElement = useRef<HTMLInputElement>(null)
  const onStop = (e: DraggableEvent, data: DraggableData) => {
    // click
    console.log("droped");
    console.log(CurrentTextFieldinfo.id);
      //Pos only some changes
      setCurrentTextFieldinfo(prevposState => ({...prevposState, pos: [data.x, data.y]}));
      if ((data.x >= -90 && data.x <= 75) && (data.y >= 25 && data.y <= 75)){
        deleteDraggableTextInfo(CurrentTextFieldinfo.id)
      }

  }
  const TextEditMode = () => {
    // click
    inputElement && inputElement.current?.focus();
    }
  const EnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        setEditMode(true)
      }
  }
  useEffect(() => {
    TextEditMode()
  },[editMode])

      return (
        <Draggable handle="strong" defaultPosition={{x: CurrentTextFieldinfo.pos[0], y: CurrentTextFieldinfo.pos[1]}} onStop={onStop}> 
        <div style={{position: 'absolute'}}>
          <strong >
            {editMode?
            <div style={{fontSize: 20}} 
             onDoubleClick={(e) => setEditMode(false)}>
              {CurrentTextFieldinfo.content}
            </div>
            : 
            <input style={{fontSize: 20}} className="textstyle" type='text' 
              ref={inputElement} 
              onBlur={(e) => setEditMode(true)} 
              onKeyPress={(e) => EnterKeyPress(e)}
              onChange={(e) => ChangeText(CurrentTextFieldinfo.id, e.target.value)}>
            </input>
            }
          </strong>
        </div>
        </Draggable>
      );
}