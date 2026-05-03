import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

import events from '../resources/events.json';
import { Link } from 'gatsby';

const pastEvents = events
  .filter(e => e.type === 'past')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const regularEvents = events.filter(e => e.type === 'regular');

const featuredEvents = events.filter(e => e.type === 'featured');

const Events = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: { xs: '100%', md: 800 },
          mx: 'auto',
          px: 2,
        }}
      >
        {/* 标题 */}
        <Typography variant="h1" sx={{ mb: 2 }}>
          教会活动 Events
        </Typography>

        <Typography sx={{ mb: { xs: 3, md: 6 } }}>
          在每周的固定敬拜之外，我们每年夏天会有户外聚餐，徒步，BBQ。
          复活节，感恩节，圣诞节都有相应的纪念活动。
          请看近期安排，不要错过即将到来的活动哦！😊
        </Typography>

        {/* 日常活动 */}
        <Typography variant="h2" sx={{ mb: 2 }}>
          日常安排 Regular Events
        </Typography>

        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: '1fr 3fr',
            gap: { xs: 1, md: 3 },
          }}
        >
          {regularEvents.map((event, index) => (
            <React.Fragment key={index}>
              <Box>
                <Typography variant="h3">{event.title}</Typography>
                <Typography>{event.date}</Typography>
              </Box>
              <Typography>{event.description}</Typography>
            </React.Fragment>
          ))}
        </Box>

        {/* 特别活动 */}
        <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
          特别活动 Featured Events
        </Typography>

        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: '1fr 3fr',
            gap: { xs: 1, md: 3 },
          }}
        >
          {featuredEvents.map((event, index) => (
            <React.Fragment key={index}>
              <Box>
                <Typography variant="h3">{event.title}</Typography>
                <Typography>{event.date}</Typography>
              </Box>
              <Typography>{event.description}</Typography>
            </React.Fragment>
          ))}
        </Box>

        {/* Past Events */}
        <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
          活动纪实 Past Events
        </Typography>

        {pastEvents.map(event => (
          <Box
            key={event.slug}
            sx={{
              mb: 4,
              p: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Link to={`/events/${event.slug}`} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {event.title}
              </Typography>
            </Link>

            {/* ✅ 图片（修复版） */}
            {(event.cover || event.images?.[0]) && (
              <Box
                component="img"
                src={event.cover || event.images?.[0]}
                alt={event.title}
                loading="lazy"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 1,
                }}
              />
            )}

            <Typography variant="body2">
              {event.date} | {event.location}
            </Typography>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default Events;

export const Head = () => <Seo title="Events" />;