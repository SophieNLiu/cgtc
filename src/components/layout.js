import React from 'react';

import Box from '@mui/material/Box';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../theme';
import Header from './header';
import Footer from './footer';
import EventBanner from './eventBanner';

const Layout = props => {
  const { children } = props;

  return (

    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ✅ GLOBAL EVENT BANNER (ALL PAGES) */}
      <EventBanner />

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          px: { xs: 1, md: 4 },
          pb: { xs: 1, md: 4 },

          // important: prevent overlap with fixed banner
          //*pt: 6,
        }}
      >
        {children}
      </Box>

      {/* FOOTER */}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;