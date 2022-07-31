import React from 'react';
import { Box } from '@mui/material';

import ConstructorTool from './ConstructorTool';

import { useSelector } from 'react-redux';

function Constructor() {
  const items = useSelector(state => state.constructorTools)

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
        {
          Array.from({length: items.button}, (item, index) => <ConstructorTool index={index + 1} type='button' />)
        }
        {
          Array.from({length: items.headline}, (item, index) => <ConstructorTool index={index + 1} type='headline' />)
        }
        {
          Array.from({length: items.image}, (item, index) => <ConstructorTool index={index + 1} type='image' />)
        }
        {
          Array.from({length: items.paragraph}, (item, index) => <ConstructorTool index={index + 1} type='paragraph' />)
        }
    </Box>
  );
}

export default Constructor;
