import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ButtonTool from './ButtonTool';
import HeadlineTool from './HeadlineTool';
import ImageTool from './ImageTool';
import ParagraphTool from './ParagraphTool';

const ToolBar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>

          <ListItem disablePadding>
            <ButtonTool />
            <ListItemText primary="Button" />
          </ListItem>

          <ListItem disablePadding>
            <HeadlineTool />
            <ListItemText primary="Headline" />
          </ListItem>

          <ListItem disablePadding>
            <ImageTool />
            <ListItemText primary="Image" />
          </ListItem>

          <ListItem disablePadding>
            <ParagraphTool />
            <ListItemText primary="Paragraph" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ToolBar;
