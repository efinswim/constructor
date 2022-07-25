import { ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';

import ParagraphToolImg from '@mui/icons-material/ShortTextRounded';
import PictureToolImg from '@mui/icons-material/ImageRounded';
import HeadlineToolImg from '@mui/icons-material/ViewHeadlineRounded';
import { addNewElement } from '../../store/constructorSlice';

function ToolbarItem({ type }) {
  const dispatch = useDispatch();

  const handleAddElement = (event) => {
    if (event.x > 200) {
      dispatch(addNewElement(type));
    }
  };

  return (
    <Draggable bounds={{ left: 0, top: 0, right: 450, bottom: 660 }} onStop={handleAddElement}>
      <Paper
        sx={{
          backgroundColor: '#F6F9FE',
          borderRadius: '10px',
          boxShadow: 'none',
          width: '100px',
          height: '100px',
          position: 'relative',
          margin: '10px',
        }}>
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
          }}
          disablePadding>
          {type === 'image' || type === 'button' ? <PictureToolImg /> : ''}
          {type === 'paragraph' ? <ParagraphToolImg /> : ''}
          {type === 'headline' ? <HeadlineToolImg /> : ''}
          <ListItemText primary={type} />
        </ListItem>
      </Paper>
    </Draggable>
  );
}

export default ToolbarItem;
