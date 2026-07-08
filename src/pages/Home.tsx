import React from 'react';
import { Hero } from '../components/Hero';
import { Ticker } from '../components/Ticker';
import { About } from '../components/About';
import { Principles } from '../components/Principles';
import { Timeline } from '../components/Timeline';
import { Advisors } from '../components/Advisors';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Principles />
      <Timeline />
      <Advisors />
      <CTA />
    </>
  );
};
export default Home;
