import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const PASSWORD = 'cgtc2026';

const Members = () => {
  const [password, setPassword] = useState('');
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('cgtc_members_access');
    if (saved === 'true') {
      setAllowed(true);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (password === PASSWORD) {
      localStorage.setItem('cgtc_members_access', 'true');
      setAllowed(true);
      setError('');
    } else {
      setError('Password is incorrect.');
    }
  };

  if (!allowed) {
    return (
      <Layout>
        <Box
          sx={{
            maxWidth: 500,
            width: '100%',
            mx: 'auto',
            px: 2,
            py: 6,
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" sx={{ mb: 3 }}>
            会员专区 Members Area
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Please enter the members password to continue.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />

            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <Button type="submit" variant="contained">
              Enter
            </Button>
          </Box>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 900,
          width: '100%',
          mx: 'auto',
          px: 2,
          py: 4,
        }}
      >
        <Typography variant="h1" sx={{ mb: 4 }}>
          会员专区 Members Area
        </Typography>

        <Typography variant="h4" gutterBottom>
          相关链接  Reference Links
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
          }}
        >
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
    </Layout>
  );
};

export default Members;

export const Head = () => (
  <Seo
    title="Members"
    description="Members area for Calgary Grace & Truth Church."
  />
);