import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/nav/Nav';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import OfflinePage from './Components/Offline/Offline';

const App = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {isOnline ? (
        <>
          <Header />
          <Nav />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </>
      ) : (
        <OfflinePage />
      )}
    </>
  );
};

export default App;
