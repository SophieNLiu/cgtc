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

  if (isMobile) {
    return (
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'background.default',
          zIndex: 1,
          p: 1,
          marginBottom: 2,
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
            color='primary'
            sx={{
              justifySelf: 'flex-end',
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
            color='primary'
            onClick={() => setOpen(false)}
            sx={{ position: 'absolute', right: 0, top: 0, mt: 2, mr: 2 }}
          >
            <CloseIcon fontSize='large' />
          </IconButton>
          <Button component={Link} to='/contact'>
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
            <Button variant='text' component={Link} to='/'>
              Home
            </Button>
            <Button variant='text' component={Link} to='/about'>
              About Us
            </Button>
            <Button variant='text' component={Link} to='/events'>
              Events
            </Button>
            <Button variant='text' component={Link} to='/sermons'>
              Sermons
            </Button>
            <Button variant='text' component={Link} to='/contact'>
              Contact Us
            </Button>
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
        backgroundColor: 'background.default',
        zIndex: 1,
        py: 1,
        px: 2,
        marginBottom: 1,
      }}
      role='header'
    >
      <Logo style={{ height: '5rem', width: 'auto' }} />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          height: 'max-content',
        }}
      >
        <Button variant='text' color='secondary' component={Link} to='/'>
          Home
        </Button>
        <Button variant='text' color='secondary' component={Link} to='/about'>
          About Us
        </Button>
        <Button variant='text' color='secondary' component={Link} to='/events'>
          Events
        </Button>
        <Button variant='text' color='secondary' component={Link} to='/sermons'>
          Sermons
        </Button>
        <Button variant='text' color='secondary' component={Link} to='/contact'>
          Contact Us
        </Button>
      </Box>
      <Button
        variant='contained'
        color='primary'
        sx={{ width: 'max-content' }}
        component={Link}
        to='/contact'
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Header;
