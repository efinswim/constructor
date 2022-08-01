import { Box, Typography } from '@mui/material';
import React from 'react';

import ConstructorControlPanel from './ConstructorControlPanel';
import ConstructorContentInput from './ConstructorContentInput';

import ShortTextRoundedIcon from '@mui/icons-material/ShortTextRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';

import { useDispatch } from 'react-redux';
import { copyElement, removeElement, moveUp, moveDown } from '../../store/constructorSlice';

function ConstructorTool({ id, type, value }) {
  const dispatch = useDispatch();

  const handleCopyElement = () => dispatch(copyElement(id));
  const handleDeleteElement = () => dispatch(removeElement(id));
  const handleMoveUp = () => dispatch(moveUp(id));
  const handleMoveDown = () => dispatch(moveDown(id));

  return (
    <Box sx={{ margin: '10px' }}>
      <ConstructorControlPanel
        id={id}
        onClickCopy={handleCopyElement}
        onClickRemove={handleDeleteElement}
        onClicMoveUp={handleMoveUp}
        onClickMoveDown={handleMoveDown}
      />
      <Box
        sx={{
          width: '560px',
          height: '150px',
          bgcolor: '#F5F5FC',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '10px',
        }}>
        {type === 'button' && <ImageRoundedIcon sx={{ fontSize: '45px' }} />}
        {type === 'image' && <ImageRoundedIcon sx={{ fontSize: '45px' }} />}
        {type === 'paragraph' && <ShortTextRoundedIcon sx={{ fontSize: '45px' }} />}
        {type === 'headline' && <ViewHeadlineRoundedIcon sx={{ fontSize: '45px' }} />}
        <Typography component="p">{type}</Typography>
        <ConstructorContentInput id={id} type={type} value={value} />
      </Box>
    </Box>
  );
}

export default ConstructorTool;
