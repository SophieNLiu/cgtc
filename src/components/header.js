import React, { useState } from 'react';
import { Link } from 'gatsby';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../images/cgtc_logo.svg';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);

  // MATCH FOOTER COLOR EXACTLY
  const headerColor = theme.palette.text.primary;

  if (isMobile) {
    return (
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: headerColor,
          zIndex: 1200,
          p: 1,
          marginBottom: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          <Link to='/' style={{ gridColumnStart: 2 }}>
            <Logo style={{ height: '5rem', width: 'auto' }} title='Home' />
          </Link>

          <IconButton
            sx={{
              justifySelf: 'flex-end',
              color: theme.palette.background.default,
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </Box>

        <Drawer
          anchor='right'
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            paper: {
              sx: {
                width: '100vw',
                height: '100vh',
                backgroundColor: headerColor,
                color: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 3,
                justifyContent: 'space-around',
              },
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              mt: 2,
              mr: 2,
              color: theme.palette.background.default,
            }}
          >
            <CloseIcon fontSize='large' />
          </IconButton>

          {/* Main CTA */}
          <Button
            component={Link}
            to='/contact'
            onClick={() => setOpen(false)}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              px: 3,
              py: 1,
              borderRadius: 999,
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Contact Us
          </Button>

          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Events', path: '/events' },
              { label: 'Contact Us', path: '/contact' },
            ].map(item => (
              <Button
                key={item.path}
                variant='text'
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  color: theme.palette.background.default,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: headerColor,
        color: theme.palette.background.default,
        zIndex: 1200,
        py: 1,
        px: 2,
        marginBottom: 1,
        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
      }}
      role='header'
    >
      {/* Logo */}
      <Link to='/'>
        <Logo style={{ height: '5rem', width: 'auto' }} title='Home' />
      </Link>

      {/* Desktop Navigation */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          height: 'max-content',
        }}
      >
        {[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about' },
          { label: 'Events', path: '/events' },
          { label: 'Contact Us', path: '/contact' },
        ].map(item => (
          <Button
            key={item.path}
            variant='text'
            component={Link}
            to={item.path}
            sx={{
              color: theme.palette.background.default,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.12)',
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      {/* Desktop CTA */}
      <Button
        variant='contained'
        sx={{
          width: 'max-content',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          fontWeight: 700,
          borderRadius: 999,
          px: 3,
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
        component={Link}
        to='/contact'
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Header;