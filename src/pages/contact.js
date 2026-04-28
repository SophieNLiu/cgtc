import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import Layout from '../components/layout';
import Seo from '../components/seo';
import TextField from '../components/basicComponents/textField';

import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
} from '../resources/information';
import TransitionBox from '../components/basicComponents/transitionBox';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const fullAddress = `${ADDRESS_LINE_1} ${ADDRESS_LINE_2} ${ADDRESS_LINE_3}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmitForm = async event => {
    event.preventDefault();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          message,
        }),
      });

      setName('');
      setEmail('');
      setMessage('');
      setFeedback('Thank you for submitting!');
    } catch (error) {
      console.error(error);
      setFeedback(
        `Something has gone wrong. Please try again later, or email us at ${EMAIL_ADDRESS}.`,
      );
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: 800 },
        }}
      >
        <Typography variant="h1" sx={{ mb: { xs: 2, md: 5 } }}>
          Contact
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* CONTACT INFO */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: 1.5,
              rowGap: 2,
              flexGrow: 1,
              mt: 1.5,
              mb: { xs: 3, md: 0 },
            }}
          >
            {/* ADDRESS → Google Maps */}
            <IconSegment Icon={FmdGoodOutlinedIcon}>
              <Box
                component="a"
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyle}
              >
                <Typography>{ADDRESS_LINE_1}</Typography>
                <Typography>{ADDRESS_LINE_2}</Typography>
                <Typography>{ADDRESS_LINE_3}</Typography>
              </Box>
            </IconSegment>

            {/* PHONE → CALL */}
            <IconSegment Icon={LocalPhoneOutlinedIcon}>
              <Box
                component="a"
                href={`tel:${PHONE_NUMBER}`}
                sx={linkStyle}
              >
                <Typography>{PHONE_NUMBER}</Typography>
              </Box>
            </IconSegment>

            {/* EMAIL → MAIL POPUP */}
            <IconSegment Icon={EmailOutlinedIcon}>
              <Box
                component="a"
                href={`mailto:${EMAIL_ADDRESS}`}
                sx={linkStyle}
              >
                <Typography>{EMAIL_ADDRESS}</Typography>
              </Box>
            </IconSegment>
          </Box>

          {/* FORM */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              gap: 0.75,
            }}
            component="form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmitForm}
          >
            <input type="hidden" name="form-name" value="contact" />

            <TextField
              label="Name"
              value={name}
              onChange={e => {
                setName(e.target.value);
                if (feedback) setFeedback('');
              }}
            />

            <TextField
              label="Email"
              type="email"
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (feedback) setFeedback('');
              }}
            />

            <TextField
              label="Message"
              multiline
              minRows={5}
              value={message}
              onChange={e => {
                setMessage(e.target.value);
                if (feedback) setFeedback('');
              }}
            />

            <Button
              sx={{
                borderRadius: 0,
                alignSelf: 'end',
                width: { xs: '100%', md: '8rem' },
              }}
              type="submit"
            >
              Send
            </Button>

            <TransitionBox isVisible={feedback}>
              <Typography>{feedback}</Typography>
            </TransitionBox>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;

/* ICON BLOCK */
const IconSegment = props => {
  const { Icon, children } = props;

  return (
    <>
      <Icon />
      <Box>{children}</Box>
    </>
  );
};

/* LINK STYLE */
const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  display: 'inline-block',
  '&:hover': {
    opacity: 0.7,
    cursor: 'pointer',
  },
};

export const Head = () => <Seo title="Contact Us" />;