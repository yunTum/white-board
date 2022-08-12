import React from 'react';
import './App.css';
import { MainEditLayout } from './layouts/Main';
import { NoteBoard } from "./components/NoteBoard";
import { DraggableTextField } from './components/DraggableTextField';
import { TextBoard } from './components/TextBoard';
import { Canvas } from './components/CanvasBoard'
import { StickynotesProvider } from './components/StickynoteProvider'
import { DraggableTextProvider } from './components/DraggableTextProvider'

function App() {

  return (
    <div className="App">
      <StickynotesProvider>
        <DraggableTextProvider>
          <Canvas/>
          <MainEditLayout />
          <NoteBoard />
          <TextBoard />
        </DraggableTextProvider>
      </StickynotesProvider>
      
    </div>
  );
}

export default App;
