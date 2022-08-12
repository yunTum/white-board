import { ActionTypes } from './actionTypes';
import { addStickynoteActionType, addTextActionType } from '../types';

export const ADD_STICKYNOTE = "ADD_STICKYNOTE"

export const addStickynoteAction = () => {
    return {
        type: "ADD_STICKYNOTE",
        payload: {
            content:'Hello',
            pos: [100, -300],
            color:'#fcf5dd'
        }
    }
}

export const addStickynote = () : addStickynoteActionType => {
    return {
        type: ActionTypes.Add_Stickynote
    }
}

//Text
export const addTextAction = () => {
    return {
        type: "ADD_TEXT",
        payload: {
            content:'Text',
            pos: [300, -300],
        }
    }
}

export const addText = () : addTextActionType => {
    return {
        type: ActionTypes.Add_Text
    }
}