import React from 'react';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Box, IconButton } from '@mui/material';

function ConstructorControlPanel({ onClickCopy, onClickRemove }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          right: '90px',
          bgcolor: '#449CF4',
          borderRadius: '10px',
          margin: '5px',
        }}>
        <IconButton>
          <NorthRoundedIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <SouthRoundedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '0px',
          bgcolor: '#68C2E9',
          borderRadius: '10px',
          margin: '5px',
        }}>
        <IconButton onClick={onClickCopy}>
          <ContentCopyRoundedIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={onClickRemove}>
          <DeleteRoundedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ConstructorControlPanel;
