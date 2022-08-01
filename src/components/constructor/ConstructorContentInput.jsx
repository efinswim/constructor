import { Container, TextField } from '@mui/material';
import React from 'react';

import { useDispatch } from 'react-redux';
import { changeValueElement } from '../../store/constructorSlice';

function ConstructorContentInput({ id, type, value }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeValueElement({ value: event.target.value, id: id }));
    console.log('dispatch')
  };

  return (
    <Container sx={{ backgroundColor: '#F5F5FC', width: '90%', margin: '10px' }}>
      <TextField size="small" value={value} fullWidth onChange={handleChange} />
    </Container>
  );
}

export default ConstructorContentInput;
