import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';



export default function EventTemplate({ pageContext }) {
  const { event } = pageContext;

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Layout>
      <Box p={4}>
        <Typography variant="h4">
          {event.title}
        </Typography>

        <Typography mt={2}>
          📅 {event.date}
        </Typography>

        <Typography>
          📍 {event.location}
        </Typography>

        <Typography mt={2}>
          {event.description}
        </Typography>

        <Box
          mt={3}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 2,
          }}
        >
{event.images && event.images.map((img, index) => (
  <img
    key={index}
    src={`/images/${img}`}
    style={{
      width: '100%',
      borderRadius: '12px',
      cursor: 'pointer',
      marginBottom: '10px'
    }}
    onClick={() => setSelectedImage(img)}
  />
))}
{selectedImage && (
  <Box
    onClick={() => setSelectedImage(null)}
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      cursor: 'zoom-out',
    }}
  >
    <img
      src={`/images/${selectedImage}`}
      style={{
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '12px',
      }}
    />
  </Box>
)}
        </Box>
      </Box>
    </Layout>
  );
}

