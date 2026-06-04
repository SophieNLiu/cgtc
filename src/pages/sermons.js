import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

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
        {/* CGTC Sermons */}
        <Box sx={{ mt: 2, maxWidth: 900, mx: 'auto' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            恩理讲道链接 Sermon Links
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              fontSize: '1.05rem',
            }}
          >
            <a
              href="https://www.youtube.com/playlist?list=PLZlLfWBhBKVZd6LwTsyxcJKVMAwxu_OZf"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 北部讲道 国粤语 North Sermons Mandarin / Cantonese
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

        <Divider sx={{ my: 6 }} />

        {/* External Resources */}
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
            }}
          >
            推荐资源 External Resources
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              pl: 2,
              fontSize: '0.9rem',
              color: 'text.secondary',
            }}
          >
            <a
              href="https://youtu.be/GEx0rPMt-8k"
              target="_blank"
              rel="noopener noreferrer"
            >
              • Abo — 见证毕士大
            </a>

            <a
              href="https://youtu.be/AXYehFE4nVA"
              target="_blank"
              rel="noopener noreferrer"
            >
              • Abo — 见证西罗亚
            </a>

            <a
              href="https://www.stemi.tv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 唐崇荣 — STEMI TV
            </a>

            <a
              href="https://www.svca.cc/messages/latest.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 于宏洁 — 硅谷基督徒聚会（SVCA）
            </a>

            <a
              href="https://www.lifechurchmissions.com/Sun.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              • 朱志山 — 新加坡基督生命堂
            </a>

            <a
              href="https://www.gty.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              • John MacArthur — Grace to You
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