import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { useState, useContext } from 'react';
import { useDispatch } from "react-redux";
import { addStickynote, addText } from '../redux/buttons/actions'

import { StickynotesContext } from './StickynoteProvider';
import { DraggableTextContext } from './DraggableTextProvider';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';

export const MuiButton = () => {
    return <Button variant="contained">Hello World</Button>;
}

export const MuiIconAddStickyButton = () => {
    const dispatch = useDispatch()
    const {StickynotesInfo, addStickynoteInfo} = useContext(StickynotesContext)
    const addNote = () => {
        //dispatch(addStickynote())
    }

    // const Notes = useContext(NoteContext); 
    // const createStickynote = () => {
    //     const initdata: Note = {
    //         content:'Hello',
    //         pos: [100, -300],
    //         color:'#fcf5dd'
    //     }
    //     Notes.push(initdata);
    //     console.log(Notes);
    // }

    return <IconButton color="primary" aria-label="sticky add to board" onClick={addStickynoteInfo}>
                <AddToPhotosOutlinedIcon />
            </IconButton>
}


//////////////////////////////////////////////////////////////////////////
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));
  
  const actions = [
    { icon: <CreateOutlinedIcon />, name: 'Pen' },
    { icon: <CleaningServicesOutlinedIcon />, name: 'Erase' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <SaveIcon />, name: 'Save' },
  ];

export const PlaygroundCanvasSpeedDial = () => {
    const [direction, setDirection] = useState<SpeedDialProps['direction']>('right');

      return (
            <StyledSpeedDial
              ariaLabel="SpeedDial playground example"
              icon={<PaletteOutlinedIcon />}
              direction={direction}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipPlacement={"top-start"}
                />
              ))}
            </StyledSpeedDial>
      );
}

//////////////////////////////////////////////////////////////////////////

export const MuiIconAddTextButton = () => {
    const {DraggableTextInfo, addDraggableTextInfo} = useContext(DraggableTextContext)
    return <IconButton color="primary" aria-label="text add to board" onClick={addDraggableTextInfo}>
                <TitleOutlinedIcon />
            </IconButton>
}

export const MuiIconAddShapeButton = () => {
    return <IconButton color="primary" aria-label="shape add to board">
                <InterestsOutlinedIcon />
            </IconButton>
}

export const MuiIconAddPhotoButton = () => {
    return <IconButton color="primary" aria-label="photo add to board">
                <AddPhotoAlternateOutlinedIcon />
            </IconButton>
}

export const MuiIconDeleteButton = () => {
    const [isShown, setIsShown] = useState(false);
    return <IconButton color="primary" aria-label="delete from board"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} size='large'>
                <DeleteOutlinedIcon />
                {isShown && (
        <div>
          Delete!
        </div>
      )}
            </IconButton>
}