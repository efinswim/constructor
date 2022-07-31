import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const ParagraphResult = () => {
  return (
    <Typography variant="subtitle1" component="p">
      h1. Heading
    </Typography>
  );
};

const HeadlineResult = () => {
  return (
    <Typography variant="h2" component="h2">
      h2. Heading
    </Typography>
  );
};

const ButtonResult = () => {
  return <Button variant="contained">Contained</Button>;
};

const ImageResult = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png"
      alt=""
    />
  );
};

function ResultBar() {
  const items = useSelector(state => state.constructorTools)

  return (
    <Box flex={3} p={2}>
      <Box width={300} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        {
          Array.from({length: items.button}, (item, index) => <ButtonResult key={index + 1} type='button' />)
        }
        {
          Array.from({length: items.headline}, (item, index) => <HeadlineResult key={index + 1} type='headline' />)
        }
        {
          Array.from({length: items.image}, (item, index) => <ImageResult key={index + 1} type='image' />)
        }
        {
          Array.from({length: items.paragraph}, (item, index) => <ParagraphResult key={index + 1} type='paragraph' />)
        }
      </Box>
    </Box>
  );
}

export default ResultBar;
