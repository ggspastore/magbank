import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import BlogCards from './components/BlogCards';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/Faq';

import "./App.scss";

import posts from './data/posts';


const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <BlogCards posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional />
      <Faq />
    </div>
  );

export default App;
