import { Appbar } from "../components/Appbar";
import React from "react";
import { MuiIconAddPhotoButton, MuiIconAddShapeButton, 
    MuiIconAddStickyButton, MuiIconAddTextButton, MuiIconDeleteButton,
    PlaygroundCanvasSpeedDial } from "../components/Buttons";
import '../stlyes/MainEditLayout.css'

export const MainEditLayout = () => {
    return (
        <div className="layuout">
            <div className="appbar">
                <Appbar/>
            </div>

            <div className="buttons">
                <div className="edit-canvas">
                    <PlaygroundCanvasSpeedDial/>
                </div>
                <div className="add-sticky">
                    <MuiIconAddStickyButton/>
                </div>
                <div className="add-text">
                    <MuiIconAddTextButton/>
                </div>
                <div className="add-shape">
                    <MuiIconAddShapeButton/>
                </div>
                <div className="add-photo">
                    <MuiIconAddPhotoButton/>
                </div>
                <div className="delete">
                    <MuiIconDeleteButton/>
                </div>
            </div>
        </div>
    )
}