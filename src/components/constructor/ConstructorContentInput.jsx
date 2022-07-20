import { Container, TextField } from '@mui/material';
import React from 'react';

function ConstructorContentInput() {
  return (
    <Container sx={{ backgroundColor: 'white', width: '90%', margin: '10px' }}>
      <TextField size="small" fullWidth />
    </Container>
  );
}

export default ConstructorContentInput;
