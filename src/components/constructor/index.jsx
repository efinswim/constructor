import React from 'react';
import { Box } from '@mui/material';

import ConstructorTool from './ConstructorTool';

import { useSelector } from 'react-redux';

function Constructor() {
  const items = useSelector((state) => state.constructorTools);

  return (
    <Box
      flex={3}
      p={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
      }}>
      {items.elements.map((item, index) => (
        <ConstructorTool key={item.id + index} id={item.id} type={item.type} value={item.value} />
      ))}
    </Box>
  );
}

export default Constructor;
