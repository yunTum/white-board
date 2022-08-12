import React, { createContext, FC, ReactNode, useState } from "react";
import { DraggableTextFieldInfo } from '../redux/types';

type Props = {
    children: ReactNode;
  }

type ContextType = {
    addDraggableTextInfo: () => void;
    deleteDraggableTextInfo: (id:number) => void;
    changeDraggableTextContent: (id:number, value: string) => void;
    DraggableTextInfo: Array<DraggableTextFieldInfo>;
}

export const DraggableTextContext = createContext<ContextType>({} as ContextType);

export const DraggableTextProvider: FC<Props> = ({children}) => {
    const initdata: Array<DraggableTextFieldInfo> = [
        {
            id: new Date().getTime()+1,
            content:'This is a Text',
            pos: [700, -500]
        },
        {
            id: new Date().getTime()+2,
            content:'←付箋の追加',
            pos: [65, -325]
        },
        {
            id: new Date().getTime()+3,
            content:'←テキストの追加',
            pos: [65, -270]
        },
    ]
    const [DraggableTextInfo, setDraggableTextInfo] = useState<Array<DraggableTextFieldInfo>>(initdata);

    const addDraggableTextInfo = () => {
        const newTextData: DraggableTextFieldInfo = {
            id: new Date().getTime(),
            content:'This is a Text',
            pos: [400, -500],
        }
        setDraggableTextInfo([...DraggableTextInfo, {...newTextData}])
    }

    const changeDraggableTextContent = (id:number, value: string) => {
      DraggableTextInfo.forEach((buf) => {
        if (buf.id === id){
          buf.content = value;
        }
      })
      setDraggableTextInfo(DraggableTextInfo)
      console.log(...DraggableTextInfo)
    }

    const deleteDraggableTextInfo = (id:number) => {
      setDraggableTextInfo(
        DraggableTextInfo.filter((buf, index) => (buf.id !== id))
      )
    }

  return (
    <DraggableTextContext.Provider value={{DraggableTextInfo, addDraggableTextInfo, deleteDraggableTextInfo, changeDraggableTextContent}}>
      {children}
    </DraggableTextContext.Provider>
  )
};