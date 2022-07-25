import { Box, List } from '@mui/material';
import ToolbarItem from './ToolbarItem';

const ToolBar = () => {
  return (
    <Box flex={1} p={2}>
      <Box position="fixed">
        <List>
          <ToolbarItem type="button" />
          <ToolbarItem type="image" />
          <ToolbarItem type="paragraph" />
          <ToolbarItem type="headline" />
        </List>
      </Box>
    </Box>
  );
};

export default ToolBar;
