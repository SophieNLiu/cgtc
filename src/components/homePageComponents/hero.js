import React, { useState } from 'react';
import { Link } from 'gatsby';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

//import Anniversary from '../../images/Anniversary.jpeg';
import Angels from '../../images/Angels.jpeg';

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: '0 auto',
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        width: '100%',
        mt: 3,
      }}
    >
      {/* TITLE */}
      <Typography variant="h1" textAlign="center" width="100%">
        卡城恩理基督教会
        <br />
        欢迎您
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        textAlign="left"
        sx={{
          maxWidth: { xs: '100%', md: 800 },
          whiteSpace: 'pre-line',
        }}
      >
        {`卡尔加里恩理华人基督教会诚挚邀请各界朋友参加每周日下午举行的主日崇拜。
我们是一间以基督为中心、以圣经为根基的教会，致力于传扬耶稣基督的恩典与真理。

本教会的会众来自不同背景，却同心追求在信仰上成长，在神的话语中扎根，在敬拜、祷告与团契中彼此建立。我们盼望每一位来到教会的朋友，都能经历神真实的同在，认识祂的爱，并在生命中得着更新与改变。

无论您是长期信主的基督徒，刚开始寻求信仰的朋友，或是对基督信仰感到好奇，我们都热忱欢迎您的到来。

主日崇拜时间：每周日下午 2:00
教会地址：14640 6 St SW, Calgary, AB T2Y 0E1

Calgary Grace and Truth Chinese Church Welcomes You

Calgary Grace and Truth Chinese Church warmly invites individuals and families to join our Sunday Worship Service every Sunday afternoon. We are a Christ-centered community committed to proclaiming the grace and truth of Jesus Christ, firmly rooted in the Word of God.

Our congregation consists of believers from diverse backgrounds who share a desire to grow in faith, experience God’s presence, and build meaningful relationships. Through biblical teaching, heartfelt worship, prayer, and fellowship, we seek to equip believers to live out their faith and share God’s love with those around us.

Whether you are a long-time Christian, new to the faith, or simply curious about Christianity, you are warmly welcome. Come as you are and experience a caring community where God’s grace is cherished, His truth is honored, and lives are being transformed.

Sunday Worship ServiceTime: Every Sunday at 2:00 PMLocation: 14640 6 St SW, Calgary, AB T2Y 0E1

We look forward to worshiping with you.
`}
      </Typography>

      {/* BUTTONS */}
      <Button component={Link} to="/contact">
        Contact Us
      </Button>
      <Button component={Link} to="/about">
        About Us
      </Button>
      <Button component={Link} to="/events">
        Events
      </Button>

      {/* ================= HERO IMAGE ================= */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          borderRadius: 3,
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={Angels}
          alt="Angels"
          sx={{
            width: '100%',

            // ✅ FIX: prevent cropping on mobile
            height: { xs: 'auto', md: 420 },

            objectFit: { xs: 'contain', md: 'cover' },
            display: 'block',
          }}
        />

        {/* GRADIENT */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            zIndex: 1,
          }}
        />

        {/* TEXT */}
        <Typography
          variant="h3"
          sx={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: 'white',
            fontWeight: 'bold',
            zIndex: 2,
            fontSize: { xs: '1.5rem', md: '2.5rem' },
          }}
        >
        
        </Typography>
      </Box>

      {/* ================= POPUP IMAGE ================= */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
        <Box sx={{ position: 'relative', backgroundColor: 'black' }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={Angels}
            alt="Full Angels View"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Hero;