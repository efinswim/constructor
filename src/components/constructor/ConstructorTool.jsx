import { Box, Typography } from '@mui/material';
import React from 'react';

import ConstructorControlPanel from './ConstructorControlPanel';
import ConstructorContentInput from './ConstructorContentInput';

import ShortTextRoundedIcon from '@mui/icons-material/ShortTextRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';

import { useDispatch } from 'react-redux';
import { copyElement, removeElement } from '../../store/constructorSlice';

function ConstructorTool({ type }) {
  const dispatch = useDispatch();

  const handleCopyElement = () => dispatch(copyElement(type));
  const handleDeleteElement = () => dispatch(removeElement(type));

  return (
    <Box sx={{ margin: '10px' }}>
      <ConstructorControlPanel onClickCopy={handleCopyElement} onClickRemove={handleDeleteElement} />
      <Box
        sx={{
          width: '560px',
          height: '150px',
          bgcolor: 'white',
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
        <ConstructorContentInput />
      </Box>
    </Box>
  );
}

export default ConstructorTool;
