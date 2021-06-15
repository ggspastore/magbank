import React from 'react';
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import BlogCards from '../components/BlogCards';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';

import posts from '../data/posts';

const Home = ({ handleClick }) => 
(
    <>
      <Hero onClick={handleClick} />
      <CreditCard />
      <BlogCards posts={posts} />
      <CenteredButton onClick={handleClick}>Abra sua conta</CenteredButton>
      <Institutional onClick={handleClick} />
      <Faq />
    </>
  );  

export default Home;
