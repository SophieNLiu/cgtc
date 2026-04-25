import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Sermons = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
    >
      <Typography variant='h2'>Sermons</Typography>
      <Button sx={{ alignSelf: 'center' }}>See More, where???</Button>
    </Box>
  );
};

export default Sermons;
