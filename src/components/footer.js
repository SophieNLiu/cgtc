import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
} from '../resources/information';

const Footer = () => {
  const fullAddress = `${ADDRESS_LINE_1} ${ADDRESS_LINE_2} ${ADDRESS_LINE_3}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        mt: 8,

        // FULL WIDTH RECTANGLE BACKGROUND
        width: '100%',
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
      })}
    >
      <Container maxWidth="md" sx={{ py: 3 }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Calgary Grace & Truth Church
        </Typography>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />

        {/* Content */}
        <Stack spacing={1.2}>
          {/* Phone */}
          <Box
            component="a"
            href={`tel:${PHONE_NUMBER}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">{PHONE_NUMBER}</Typography>
          </Box>

          {/* Email */}
          <Box
            component="a"
            href={`mailto:${EMAIL_ADDRESS}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography variant="body2">{EMAIL_ADDRESS}</Typography>
          </Box>

          {/* Address */}
          <Box
            component="a"
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
              <br />
              {ADDRESS_LINE_3}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;