 {/* import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutUs = () => {
  return (
    <Layout>
      <Typography variant='h1'>关于我们（About Us)</Typography>
      <div>TODO: Photos</div>

<Box sx={{ position: 'relative', mb: 4 }}>
  <Box
    component="img"
    src="/images/D1A2220B-4C33-41F1-A7B5-5B2E75C88E90_1_105_c.jpeg"
    sx={{
      width: '100%',
      height: { xs: 200, md: 400 },
      objectFit: 'cover',
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
  >
    About Us
  </Typography>
</Box>





      
      <Segment title='我们的初心 (Our Mission)' sx={{ mb: { xs: 0, md: 6 } }}>
简单来说，我们是一群努力学习“爱”的人：学习爱那位创造生命的神，也学习如何真诚地爱身边的每一个人。在这里，我们不仅一起钻研圣经里的生活智慧，更像家人一样互相扶持、共同成长。我们最想做的，就是把这份从耶稣而来的平安与喜乐，分享给卡城每一位寻找生命意义的朋友。
      </Segment>
      <Segment title='我们的故事 (Our Story)'>
恩理教会（CGTC）的故事，要从2008年说起。

那时候，一群华人移民怀着对上帝的渴慕聚集在一起。这些年来，我们像许多新移民家庭一样，曾租用过不同的地方聚会，经历过搬迁和寻找。直到后来，我们终于在卡城南边美丽的 Fish Creek 附近安了家。
我们是一个信仰纯粹、不分宗派的独立教会。我们不讲深奥的教条，只愿在这里彰显上帝的爱与真理。无论生活顺遂还是起伏，我们都希望能陪你一起探索生命的真谛，靠着信仰的力量，把每天的日子过得更有盼望。
      </Segment>
    </Layout>
  );
};

export default AboutUs;

const Segment = props => {
  const { title, children, sx = {} } = props;

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr min(50%, 600px) 1fr',
        gap: 2,
        ...sx,
      }}
    >
      <Typography
        variant='h2'
        sx={{ width: { xs: '100%', md: 'min-content' } }}
      >
        {title}
      </Typography>
      <Typography>{children}</Typography>
    </Box>
  );
};

export const Head = () => <Seo title='About Us' />; */}

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ChurchPhoto from '../images/D1A2220B-4C33-41F1-A7B5-5B2E75C88E90_1_105_c.jpeg';

const AboutUs = () => {
  return (
    <Layout>

      {/* Banner */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Box
          component="img"
           {/* src="/images/D1A2220B-4C33-41F1-A7B5-5B2E75C88E90_1_105_c.jpeg"*/}
          <Image src={ChurchPhoto} alt="Church" width={600} height={400} />
          sx={{
            width: '100%',
            height: { xs: 220, md: 420 },
            objectFit: 'cover',
            borderRadius: 3,
          }}
        />

        {/* 渐变遮罩 */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            borderRadius: 3,
          }}
        />

        {/* Banner 标题 */}
        <Typography
          variant="h3"
          sx={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* 主标题 */}
      <Typography variant="h1" textAlign="center" sx={{ mb: 6 }}>
        关于我们（About Us)
      </Typography>

      {/* 照片区 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 2,
          mb: 6,
        }}
      >
        <Box component="img" src="/images/1.jpg" sx={{ width: '100%', borderRadius: 2 }} />
        <Box component="img" src="/images/2.jpg" sx={{ width: '100%', borderRadius: 2 }} />
        <Box component="img" src="/images/3.jpg" sx={{ width: '100%', borderRadius: 2 }} />
      </Box>

      {/* Mission */}
      <Segment title="我们的初心 (Our Mission)" sx={{ mb: { xs: 4, md: 6 } }}>
{`简单来说，我们是一群努力学习“爱”的人：学习爱那位创造生命的神，也学习如何真诚地爱身边的每一个人。在这里，我们不仅一起钻研圣经里的生活智慧，更像家人一样互相扶持、共同成长。

我们最想做的，就是把这份从耶稣而来的平安与喜乐，分享给卡城每一位寻找生命意义的朋友。`}
      </Segment>

      {/* Story */}
      <Segment title="我们的故事 (Our Story)">
{`恩理教会（CGTC）的故事，要从2008年说起。

那时候，一群华人移民怀着对上帝的渴慕聚集在一起。这些年来，我们像许多新移民家庭一样，曾租用过不同的地方聚会，经历过搬迁和寻找。直到后来，我们终于在卡城南边美丽的 Fish Creek 附近安了家。

我们是一个信仰纯粹、不分宗派的独立教会。我们不讲深奥的教条，只愿在这里彰显上帝的爱与真理。无论生活顺遂还是起伏，我们都希望能陪你一起探索生命的真谛，靠着信仰的力量，把每天的日子过得更有盼望。`}
      </Segment>

    </Layout>
  );
};

export default AboutUs;

const Segment = props => {
  const { title, children, sx = {} } = props;

  return (
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
      <Typography
        variant="h2"
        sx={{ width: { xs: '100%', md: 'min-content' } }}
      >
        {title}
      </Typography>

      <Typography sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
        {children}
      </Typography>
    </Box>
  );
};

export const Head = () => <Seo title="About Us" />;
