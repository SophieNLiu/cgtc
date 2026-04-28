import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

import events from '../resources/events.json';

const Events = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: 800,
          },
        }}
      >
        <Typography variant='h1' sx={{ alignSelf: 'start', mb: 2 }}>
          教会活动 Events
        </Typography>
        <Typography sx={{ mb: { xs: 3, md: 6 } }}>
在每周的固定敬拜之外，我们每年夏天会有户外聚餐， 徒步， BBQ。 复活节， 感恩节， 圣诞节都有相应的纪念活动。 
请看近期安排， 不要错过即将到来的活动哦！😊
        </Typography>
        <Typography variant='h2' sx={{ mb: 2 }}>
          近期安排 Upcoming Events
        </Typography>
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: '1fr 3fr',
            gap: {
              xs: 1,
              md: 3,
            },
          }}
        >
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <Box sx={{ mt: { xs: 1, md: 0 } }}>
                <Typography variant='h3'>{event.title}</Typography>
                <Typography>{event.date}</Typography>
              </Box>
              <Typography>{event.description}</Typography>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Events;

export const Head = () => <Seo title='Events' />;
