import React from 'react';
import { Link } from 'gatsby';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: 2,
        width: '100%',
        mt: 3,
      }}
    >
      <Typography variant='h1' textAlign='left'>
        卡尔加里恩理华人基督教会欢迎您
      </Typography>
      <Typography
        textAlign='left'
        sx={{
          maxWidth: {
            xs: '100%',
            md: 800,
          },
          whiteSpace: 'pre-line',
        }}
      >
{`卡尔加里恩理华人基督教会诚挚邀请各界朋友参加每周日下午举行的主日崇拜。
我们是一间以基督为中心、以圣经为根基的教会，致力于传扬耶稣基督的恩典与真理。

本教会的会众来自不同背景，却同心追求在信仰上成长，在神的话语中扎根，在敬拜、祷告与团契中彼此建立。我们盼望每一位来到教会的朋友，都能经历神真实的同在，认识祂的爱，并在生命中得着更新与改变。

无论您是长期信主的基督徒，刚开始寻求信仰的朋友，或是对基督信仰感到好奇，我们都热忱欢迎您的到来。愿这里成为您属灵的家，与我们一同敬拜神、学习真理、彼此相爱、同走天路。

主日崇拜时间：每周日下午 2:00
教会地址：14640 6 St SW, Calgary, AB T2Y 0E1

期待与您相见！

Calgary Grace and Truth Chinese Church Welcomes You

Calgary Grace and Truth Chinese Church warmly invites individuals and families to join our Sunday Worship Service every Sunday afternoon.

We are a Christ-centered community committed to proclaiming the grace and truth of Jesus Christ, firmly rooted in the Word of God.

Our congregation consists of believers from diverse backgrounds who share a desire to grow in faith, experience God’s presence, and build meaningful relationships.

Through biblical teaching, heartfelt worship, prayer, and fellowship, we seek to equip believers to live out their faith and share God’s love with those around us.

Whether you are a long-time Christian, new to the faith, or simply curious about Christianity, you are warmly welcome.

Sunday Worship Service  
Time: Every Sunday at 2:00 PM  
Location: 14640 6 St SW, Calgary, AB T2Y 0E1

We look forward to worshiping with you.`}
      </Typography>
      <Button component={Link} to='/contact'>
        Contact Us
      </Button>
              <Button component={Link} to='/about'>
      About Us
      </Button>
      <Box>TODO: Images</Box>
    </Box>
  );
};

export default Hero;
