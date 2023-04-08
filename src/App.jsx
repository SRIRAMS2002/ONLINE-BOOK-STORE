import React from 'react';
import Navb from './components/Navbar';
import Head from './components/Header';
import Hero from './components/Hero';
import Foot from './components/Footer';
import Cont from './components/Contact';
import Mode from './components/Model';

const App = () => {
  return (
    <div>
      <Mode/>
      <Navb />
      <Head/>
      <Hero/>
      <Cont/>
      <Foot/>
      
    
    </div>
  )
}

export default App
