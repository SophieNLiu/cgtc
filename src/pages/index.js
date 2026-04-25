import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AboutUs from '../components/homePageComponents/aboutUs';
import Header from '../components/header';
import Layout from '../components/layout';
import Hero from '../components/homePageComponents/hero';
import Sermons from '../components/homePageComponents/sermons';
import Footer from '../components/footer';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      {/*
      <AboutUs />
      <Sermons />
      */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title='Home' />;
