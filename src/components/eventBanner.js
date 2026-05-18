import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'gatsby';

import events from '../resources/events.json';

const featuredEvent = events.find(e => e.type === 'featured');

const EventBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!featuredEvent) return;

    // Show banner every time user visits/reloads the website
    setVisible(true);
  }, []);

  const handleClose = e => {
    e.preventDefault();
    e.stopPropagation();

    // Only hide now. Do NOT save to localStorage.
    setVisible(false);
  };

  if (!visible || !featuredEvent) return null;

  return (
    <Box
      component={Link}
      to={featuredEvent?.slug ? `/events/${featuredEvent.slug}` : '/events'}
      sx={theme => ({
        position: 'fixed',
        top: { xs: 92, md: 96 },
        left: '50%',
        transform: 'translateX(-50%)',

        width: {
          xs: '92%',
          md: 'fit-content',
        },

        maxWidth: 900,
        zIndex: 99999,

        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,

        border: `2px solid ${theme.palette.text.primary}`,
        borderRadius: 999,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        px: { xs: 3, md: 5 },
        py: 1.2,

        textDecoration: 'none',
        cursor: 'pointer',

        boxShadow: '0 6px 18px rgba(0,0,0,0.18)',

        transition: '0.2s',

        '&:hover': {
          transform: 'translateX(-50%) scale(1.02)',
        },
      })}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.82rem', md: '1rem' },
          fontWeight: 700,
          textAlign: 'center',
          pr: 3,
        }}
      >
        📢 {featuredEvent.date} {featuredEvent.title}
      </Typography>

      <IconButton
        onClick={handleClose}
        sx={theme => ({
          position: 'absolute',
          right: 8,
          color: theme.palette.text.primary,
        })}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default EventBanner;