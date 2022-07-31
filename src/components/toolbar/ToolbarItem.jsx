import { ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import ParagraphToolImg from '@mui/icons-material/ShortTextRounded';
import PictureToolImg from '@mui/icons-material/ImageRounded';
import HeadlineToolImg from '@mui/icons-material/ViewHeadlineRounded';
import { addNewElement } from '../../store/constructorSlice';

function ToolbarItem({ type }) {
  const dispatch = useDispatch();

  const handleAddElement = () => dispatch(addNewElement(type));

  return (
      <Paper
        sx={{
          backgroundColor: '#F6F9FE',
          borderRadius: '10px',
          boxShadow: 'none',
          width: '100px',
          height: '100px',
          position: 'relative',
          margin: '10px',
          cursor: 'pointer'
        }}
        onClick={handleAddElement}>
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
  );
}

export default ToolbarItem;
