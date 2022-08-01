import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ParagraphResult = ({ value, type }) => {
  return (
    <Typography variant="subtitle1" component="p">
      {value}
    </Typography>
  );
};

const HeadlineResult = ({ value, type }) => {
  return (
    <Typography variant="h2" component="h2">
      {value}
    </Typography>
  );
};

const ButtonResult = ({ value, type }) => {
  return <Button variant="contained">{value}</Button>;
};

const ImageResult = ({ imgSrc }) => {
  return <img src={imgSrc} alt="" />;
};

function ResultBar() {
  const items = useSelector((state) => state.constructorTools);
  const results = items.elements.map((item, index) => {
    if (item.type === 'image') {
      return <ImageResult key={item.id} imgSrc={item.src} type={item.type} />;
    }

    if (item.type === 'button') {
      return <ButtonResult key={item.id} value={item.value} type={item.type} />;
    }

    if (item.type === 'headline') {
      return <HeadlineResult key={item.id} value={item.value} type={item.type} />;
    }

    if (item.type === 'paragraph') {
      return <ParagraphResult key={item.id} value={item.value} type={item.type} />;
    }
  });

  return (
    <Box flex={3} p={2}>
      <Box width={300} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {results}
      </Box>
    </Box>
  );
}

export default ResultBar;
