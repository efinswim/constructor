import { Box, Typography } from '@mui/material';
import React from 'react';
import ConstructorControlPanel from './ConstructorControlPanel';
import ConstructorContentInput from './ConstructorContentInput';
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';

function ConstructorHeadlineTool() {
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
        <ViewHeadlineRoundedIcon sx={{ fontSize: '45px' }} />
        <Typography component="p">Headline</Typography>
        <ConstructorContentInput />
      </Box>
    </Box>
  );
}

export default ConstructorHeadlineTool;
