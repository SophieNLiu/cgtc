import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'gatsby';

import events from '../resources/events.json';

// 🔥 CHANGE THIS FOR EACH NEW EVENT
//const EVENT_KEY = 'event_banner_2026_anniversary';

const featuredEvent = events.find(e => e.type === 'featured');

const EVENT_KEY = featuredEvent?.slug || 'event_banner';

const EventBanner = () => {
  const [visible, setVisible] = useState(false);

useEffect(() => {
  if (!featuredEvent) return;

  const dismissed = localStorage.getItem(EVENT_KEY);
  setVisible(!dismissed);
}, [featuredEvent]);

const handleClose = (e) => {
  e.preventDefault();
  e.stopPropagation();
  localStorage.setItem(EVENT_KEY, 'true');
  setVisible(false);
};


  if (!visible || !featuredEvent) return null;


  return (
    <Box
      component={Link}
      to={featuredEvent?.slug ? `/events/${featuredEvent.slug}` : '/events'}
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 99999,

        // ✅ MATCH FOOTER
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        px: 2,
        py: 1,

        textDecoration: 'none',
        cursor: 'pointer',

        // optional polish
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      {/* TEXT */}
<Typography
  sx={{
    fontSize: { xs: '0.85rem', md: '1rem' },
    fontWeight: 500,
    textAlign: 'center',
  }}
>
  {featuredEvent
    ? `📢 ${featuredEvent.date} ${featuredEvent.title}`
    : ''}



</Typography>

      {/* CLOSE BUTTON */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          color: 'inherit',
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};


export default EventBanner;

