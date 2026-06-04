import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Sermons = () => {
  return (
    <Layout>
<Box
  sx={{
    maxWidth: 1000,
    width: '100%',
    mx: 'auto',
    px: 2,
    pt: 0,
    pb: 4,
  }}
>

        <Box sx={{ mt: 6, maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            恩理讲道链接 Sermon Links
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZuwr2aODG9-4W52g-fNZjm"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 最新讲道 Latest Sermon
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZd6LwTsyxcJKVMAwxu_OZf"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 北部讲道 国粤语 North Sermons Mandarin/Cantonese
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZSQ4Wgzpf0gheRUT6vJlV-"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 北部讲道 英语 North Sermons English
            </a>
          </Box>
        </Box>
        {/* External Links */}
<Box sx={{ mt: 8, maxWidth: 900, mx: 'auto' }}>
  <Typography variant="h4" gutterBottom>
    外部链接 External Links
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >

        <a
      href="https://youtu.be/GEx0rPMt-8k"
      target="_blank"
      rel="noopener noreferrer"
    >
      • Abo - 见证毕士大
    </a>

        <a
      href="https://youtu.be/AXYehFE4nVA"
      target="_blank"
      rel="noopener noreferrer"
    >
      • Abo - 见证西罗亚
    </a>

    <a
      href="https://www.stemi.tv/?utm_so - STEMI TVce=chatgpt.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      • 唐崇荣 - STEMI TV
    </a>

    

        <a
      href="https://www.svca.cc/messages/latest.html?utm_source=chatgpt.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      • 于宏洁 - 硅谷基督徒聚会（SVCA）
    </a>

    <a
      href="https://www.lifechurchmissions.com/Sun.aspx"
      target="_blank"
      rel="noopener noreferrer"
    >
      • 朱志山 - 新加坡基督生命堂
    </a>



    <a
      href="https://www.gty.org/?utm_source=chatgpt.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      • John MacArthor - Grace to You
    </a>


  </Box>
</Box>
      </Box>
    </Layout>
  );
};

export default Sermons;

export const Head = () => (
  <Seo
    title="Sermons"
    description="Watch sermons from Calgary Grace & Truth Church."
  />
);