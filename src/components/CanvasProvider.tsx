import React, { createContext, FC, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
  }

type ContextType = {
    PenFlg: boolean;
    usePen: () => void;
    useEraser: () => void;
    reset: () => void;
    redo: () => void;
    undo: () => void;
    changeColor: () => void;
}

export const CanvasContext = createContext<ContextType>({} as ContextType);

export const CanvasProvider: FC<Props> = ({children}) => {
    const [PenFlg, setPenFlg] = useState<boolean>(false);

    const usePen = () =>{
        setPenFlg(false);
    }
    const useEraser = () =>{
        setPenFlg(true);
    }
    const reset = () =>{
        
    }
    const redo = () =>{
        
    }
    const undo = () =>{
        
    }
    const changeColor = () =>{

    }
    return (
        <CanvasContext.Provider value={{PenFlg, usePen, useEraser, reset, redo, undo, changeColor}}>
          {children}
        </CanvasContext.Provider>
      )
}