import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Sermons = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 1000,
          width: '100%',
          mx: 'auto',
          px: 2,
          py: 4,
        }}
      >
        <Typography variant="h1" textAlign="center">
          讲道链接 Sermons
        </Typography>

        {/* Latest Sermon */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            最新讲道 Latest Sermon
          </Typography>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
              overflow: 'hidden',
              borderRadius: 0.25,
              boxShadow: 3,
            }}
          >
<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/videoseries?list=PLZlLfWBhBKVZuwr2aODG9-4W52g-fNZjm"
  title="CGTC Sermons"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
          </Box>
        </Box>

        {/* Archive */}
        <Box sx={{ mt: 8, maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            讲道存档 Sermon Archive
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZuwr2aODG9-4W52g-fNZjm"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 最新讲道 Latest Sermon
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZd6LwTsyxcJKVMAwxu_OZf"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 北部讲道 国粤语 North Sermons Mandarin/Cantonese
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZSQ4Wgzpf0gheRUT6vJlV-"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 北部讲道 英语 North Sermons English
            </a>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Sermons;

export const Head = () => (
  <Seo
    title="Sermons"
    description="Watch sermons from Calgary Grace & Truth Church."
  />
);