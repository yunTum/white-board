import { Action } from 'redux'
import { ActionTypes } from './buttons/actionTypes';

//Note
export type Note = {
    readonly id: number,
    content: string,
    pos: [x: number, y: number];
    color: string
}

interface addStickynoteAction extends Action {
    type: typeof ActionTypes.Add_Stickynote,
}

export type addStickynoteActionType = addStickynoteAction


//Text
export type DraggableTextFieldInfo = {
    readonly id: number,
    content: string,
    pos: [x: number, y: number];
}

interface addTextAction extends Action {
    type: typeof ActionTypes.Add_Text,
}

export type addTextActionType = addTextAction