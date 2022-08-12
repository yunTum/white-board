import { ActionTypes } from './actionTypes';
import {Note, addStickynoteActionType, DraggableTextFieldInfo, addTextActionType} from '../types';

//Note
const initStickyState : Note = {
        id: new Date().getTime(),
        content:'',
        pos: [200, -300],
        color:'#fcf5dd'
}

export const addStickynoteReducer = (state = initStickyState, action: addStickynoteActionType) : Note=> {
    switch (action.type) {
        case ActionTypes.Add_Stickynote:
            return {
                    ...state, 
                    content:'',
                    pos: [200, -300],
                    color:'#fcf5dd'
                }
    }
    return state;
}

//Text
const initTextState : DraggableTextFieldInfo = {
    id: new Date().getTime(),
    content:'Text',
    pos: [300, -300],
}

export const addTextReducer = (state = initTextState, action: addTextActionType) : DraggableTextFieldInfo=> {
switch (action.type) {
    case ActionTypes.Add_Text:
        return {
                ...state, 
                content:'Text',
                pos: [300, -300],
            }
}
return state;
}