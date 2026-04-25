

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Sermons = () => {
  return (
    <Layout>
      <Typography variant="h1">Sermons</Typography>

      <Box sx={{ mt: 4, width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Latest Sermon
        </Typography>

  <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
  <Box
    sx={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9
      height: 0,
      overflow: 'hidden',
      borderRadius: 2,
    }}
  >
    <iframe
      src="https://www.youtube.com/embed/cfl9YNB44U0"
      title="Sermon Video"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
      }}
      allowFullScreen
    />
  </Box>
</Box>
      </Box>

        {/* Archive */}
  <Box sx={{ maxWidth: 700, mx: 'auto', mt: 6 }}>
    <Typography variant="h5" gutterBottom>
      Sermon Archive
    </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <a href="https://www.youtube.com/watch?v=cfl9YNB44U0" target="_blank" rel="noopener noreferrer">
        • Latest Sermon
      </a>
      <a href="#">• Older Sermon 1</a>
      <a href="#">• Older Sermon 2</a>
    </Box>
  </Box>
    </Layout>
  );
};

export default Sermons;

export const Head = () => <Seo title="Sermons" />;


{/*
  import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Sermons = () => {
  return (
    <Layout>
      <Typography variant='h1'>Sermons</Typography>
    </Layout>
  );
};

export default Sermons;

export const Head = () => <Seo title='Sermons' />;
*/}