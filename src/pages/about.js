import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Layout from '../components/layout';
import Seo from '../components/seo';

import ChurchPhoto from '../images/Angels.jpeg';
import CarryCross from '../images/CarryCross.jpeg';
import Children from '../images/Children.jpeg';
import Preaching from '../images/Preaching.jpeg';
import Birthday from '../images/Birthday.jpeg';

const AboutUs = () => {
  const scrollRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const images = [Preaching, CarryCross, Birthday, Children];

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth; // 👈 scroll one full screen

    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  return (
    <Layout>

      {/* Banner */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Box
          component="img"
          src={ChurchPhoto}
          alt="Church"
          sx={{
            width: '100%',
            height: { xs: 220, md: 420 },
            objectFit: 'cover',
            borderRadius: 3,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            borderRadius: 3,
          }}
        />

        <Typography
          variant="h3"
          sx={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: 'white',
            fontWeight: 'bold',
          }}
        />
      </Box>

      {/* Title */}
      <Typography variant="h1" textAlign="center" sx={{ mb: 6 }}>
        关于我们 About Us
      </Typography>

      {/* ✅ Carousel (3 per row) */}
      <Box sx={{ position: 'relative', mb: 6 }}>

        {/* LEFT */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            top: '40%',
            zIndex: 2,
            backgroundColor: 'white',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* ROW */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            px: 5,
            scrollSnapType: 'x mandatory',

            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              loading="lazy"
              onClick={() => handleOpen(img)}
              sx={{
                flex: '0 0 auto',

                // 👇 KEY PART
                width: {
                  xs: '80%',   // mobile: 1 image
                  sm: '50%',   // tablet: 2 images
                  md: '33.33%' // desktop: 3 images
                },

                height: 260,
                objectFit: 'cover',
                borderRadius: 2,
                cursor: 'pointer',
                scrollSnapAlign: 'start',

                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          ))}
        </Box>

        {/* RIGHT */}
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: 0,
            top: '40%',
            zIndex: 2,
            backgroundColor: 'white',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* LIGHTBOX */}
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
          <Box
            component="img"
            src={currentImg}
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Dialog>

      </Box>

      {/* Mission */}
      <Segment title="我们的初心 Our Mission" sx={{ mb: { xs: 4, md: 6 } }}>
{`简单来说，我们是一群努力学习“爱”的人：学习爱那位创造生命的神，也学习如何真诚地爱身边的每一个人。在这里，我们不仅一起钻研圣经里的生活智慧，更像家人一样互相扶持、共同成长。

我们最想做的，就是把这份从耶稣而来的平安与喜乐，分享给卡城每一位寻找生命意义的朋友。`}
      </Segment>

      {/* Story */}
      <Segment title="我们的故事 Our Story">
{`恩理教会（CGTC）的故事，要从2008年说起。

那时候，一群华人移民怀着对上帝的渴慕聚集在一起。这些年来，我们像许多新移民家庭一样，曾租用过不同的地方聚会，经历过搬迁和寻找。直到后来，我们终于在卡城南边美丽的 Fish Creek 附近安了家。

我们是一个信仰纯粹、不分宗派的独立教会。我们不讲深奥的教条，只愿在这里彰显上帝的爱与真理。无论生活顺遂还是起伏，我们都希望能陪你一起探索生命的真谛，靠着信仰的力量，把每天的日子过得更有盼望。`}
      </Segment>

    </Layout>
  );
};

export default AboutUs;

const Segment = ({ title, children, sx = {} }) => (
  <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      flexDirection: 'column',
      gridTemplateColumns: '1fr min(50%, 600px) 1fr',
      gap: 2,
      mb: 4,
      ...sx,
    }}
  >
    <Typography variant="h2">
      {title}
    </Typography>

    <Typography
      sx={{
        whiteSpace: 'pre-line',
        lineHeight: 1.8,
        textAlign: 'left',
      }}
    >
      {children}
    </Typography>
  </Box>
);

export const Head = () => <Seo title="About Us" />;