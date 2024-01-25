import React, { useState } from 'react';
import NavBar from './navbar.jsx';
import Slider from './Slider.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import JobPostings from './JobPostings.jsx';
import AddJob from './AddJob.jsx';

function Home() {
  const [view, setView] = useState('Home');

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div>
      {view === 'Home' && (
        <>
          <NavBar onChangeView={changeView} />
          <Slider />
          <About />
          <Footer />
        </>
      )}
      {view === 'About' && <About />}
      {view === 'Jobs' && <JobPostings />}
      {view === 'AddJob' && (
        <>
          <NavBar onChangeView={changeView} />
          {<AddJob onChangeView={changeView} />} {/* Pass the onChangeView function */}
        </>
      )}
    </div>
  );
}
export default Home