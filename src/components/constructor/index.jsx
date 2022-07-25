import React from 'react';
import { Box } from '@mui/material';
import ConstructorButtonTool from './ConstructorButtonTool';
import ConstructorHeadlineTool from './ConstructorHeadlineTool';
import ConstructorImageTool from './ConstructorImageTool';
import ConstructorParagraphTool from './ConstructorParagraphTool';

function Constructor() {
  return (
    <Box
      flex={3}
      p={2}
      sx={{
        height: '660px',
        bgcolor: '#F5F5FC',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
      }}>
      {/* <ConstructorButtonTool />
      <ConstructorHeadlineTool />
      <ConstructorImageTool />
      <ConstructorParagraphTool /> */}
    </Box>
  );
}

export default Constructor;
