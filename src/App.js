import React from 'react';
import Constructor from './components/constructor';
import NavBar from './components/NavBar';
import ResultBar from './components/resultbar';
import ToolBar from './components/toolbar';
import { Stack } from '@mui/material';

function App() {
  return (
    <>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ToolBar />
        <Constructor />
        <ResultBar />
      </Stack>
    </>
  );
}

export default App;
