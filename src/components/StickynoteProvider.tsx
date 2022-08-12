import React, { createContext, FC, ReactNode, useState } from "react";
import { Note } from '../redux/types'

type Props = {
    children: ReactNode;
  }

type ContextType = {
    addStickynoteInfo: () => void;
    deleteStickynoteInfo: (id:number) => void;
    changeStickynoteContent: (id:number, value: string) => void;
    StickynotesInfo: Array<Note>;
}

export const StickynotesContext = createContext<ContextType>({} as ContextType);

export const StickynotesProvider: FC<Props> = ({children}) => {
    const initdata: Array<Note> = [
        {
            id: new Date().getTime(),
            content:'This is a sticky note',
            pos: [500, -300],
            color:'#fcf5dd'
        },
    ]
    
    const [StickynotesInfo, setStickynotesInfo] = useState<Array<Note>>(initdata);

    const addStickynoteInfo = () => {
        const newNoteData: Note = {
          id: new Date().getTime(),
          content:'',
          pos: [300, -300],
          color:'#fcf5dd'
        }
        setStickynotesInfo([...StickynotesInfo, {...newNoteData}])
    }
    const deleteStickynoteInfo = (id:number) => {
      setStickynotesInfo(
        StickynotesInfo.filter((buf, index) => (buf.id !== id))
      )
    }
    const changeStickynoteContent = (id:number, value: string) => {
      StickynotesInfo.forEach((buf) => {
        if (buf.id === id){
          buf.content = value;
        }
      })
      setStickynotesInfo(StickynotesInfo)
    }

  return (
    <StickynotesContext.Provider value={{StickynotesInfo, addStickynoteInfo, deleteStickynoteInfo, changeStickynoteContent}}>
      {children}
    </StickynotesContext.Provider>
  )
};