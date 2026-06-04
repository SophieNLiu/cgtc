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

  const headerColor = theme.palette.text.primary;
  const oppositeColor = theme.palette.background.default;

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Sermons', path: '/sermons' },
    { label: 'Contact Us', path: '/contact' },
  ];

  if (isMobile) {
    return (
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: headerColor,
          zIndex: 1300,
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
          <Link to="/" style={{ gridColumnStart: 2 }}>
            <Logo style={{ height: '5rem', width: 'auto' }} title="Home" />
          </Link>

          <IconButton
            sx={{
              justifySelf: 'flex-end',
              color: oppositeColor,
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            paper: {
              sx: {
                width: '100vw',
                height: '100vh',
                backgroundColor: headerColor,
                color: oppositeColor,
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
              color: oppositeColor,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Button
            component={Link}
            to="/contact"
            onClick={() => setOpen(false)}
            sx={{
              color: headerColor,
              backgroundColor: oppositeColor,
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {menuItems.map(item => (
              <Button
                key={item.path}
                variant="text"
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  color: oppositeColor,
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
        color: oppositeColor,
        zIndex: 1300,
        py: 1,
        px: 2,
        marginBottom: 1,
        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
      }}
      role="header"
    >
      <Link to="/">
        <Logo style={{ height: '5rem', width: 'auto' }} title="Home" />
      </Link>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          height: 'max-content',
        }}
      >
        {menuItems.map(item => (
          <Button
            key={item.path}
            variant="text"
            component={Link}
            to={item.path}
            sx={{
              color: oppositeColor,
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

      <Button
        variant="contained"
        sx={{
          width: 'max-content',
          backgroundColor: oppositeColor,
          color: headerColor,
          fontWeight: 700,
          borderRadius: 999,
          px: 3,
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
        component={Link}
        to="/contact"
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Header;