import { Box, Typography } from '@mui/material';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

import React from 'react';
import ConstructorControlPanel from './ConstructorControlPanel';
import ConstructorContentInput from './ConstructorContentInput';

function ConstructorButtonTool() {
  return (
    <Box sx={{margin: '10px'}}>
      <ConstructorControlPanel />
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
        <ImageRoundedIcon sx={{ fontSize: '45px' }} />
        <Typography component="p">Button</Typography>
        <ConstructorContentInput />
      </Box>
    </Box>
  );
}

export default ConstructorButtonTool;
