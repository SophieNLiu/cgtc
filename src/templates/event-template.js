import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const EventTemplate = ({ pageContext }) => {
  const { title, date, location, description, images = [] } = pageContext;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [Swiper, setSwiper] = useState(null);
  const [SwiperSlide, setSwiperSlide] = useState(null);
  const [Pagination, setPagination] = useState(null);
  const [Navigation, setNavigation] = useState(null);

  useEffect(() => {
    const loadSwiper = async () => {
      const swiperReact = await import('swiper/react');
      const swiperModules = await import('swiper/modules');

      await import('swiper/css');
      await import('swiper/css/pagination');
      await import('swiper/css/navigation');

      setSwiper(() => swiperReact.Swiper);
      setSwiperSlide(() => swiperReact.SwiperSlide);
      setPagination(() => swiperModules.Pagination);
      setNavigation(() => swiperModules.Navigation);
    };

    loadSwiper();
  }, []);

  const handleOpen = i => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: 'auto' }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        返回
      </Button>

      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <Typography color="text.secondary">📅 {date}</Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        📍 {location}
      </Typography>

      {images.length > 0 && (
        <>
          {!Swiper || !SwiperSlide || !Pagination || !Navigation ? (
            <Box
              component="img"
              src={images[0]}
              alt={title}
              onClick={() => handleOpen(0)}
              sx={{
                width: '100%',
                height: { xs: 260, md: 420 },
                objectFit: 'cover',
                borderRadius: 2,
                cursor: 'pointer',
                display: 'block',
                mb: 2,
              }}
            />
          ) : (
            <Box
              sx={{
                '.swiper': {
                  width: '100%',
                  borderRadius: 2,
                },
                '.swiper-button-next, .swiper-button-prev': {
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                },
                '.swiper-button-next:after, .swiper-button-prev:after': {
                  fontSize: 18,
                },
              }}
            >
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={12}
                slidesPerView={1}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={img}>
                    <Box
                      component="img"
                      src={img}
                      alt={`${title}-${i + 1}`}
                      onClick={() => handleOpen(i)}
                      sx={{
                        width: '100%',
                        height: { xs: 260, md: 420 },
                        objectFit: 'cover',
                        borderRadius: 2,
                        cursor: 'pointer',
                        display: 'block',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          )}
        </>
      )}

      <Typography sx={{ mt: 3, whiteSpace: 'pre-line' }}>
        {description}
      </Typography>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 20,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <CloseIcon />
        </IconButton>

        {images[index] && (
          <Box
            component="img"
            src={images[index]}
            alt={title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
              backgroundColor: 'black',
            }}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default EventTemplate;