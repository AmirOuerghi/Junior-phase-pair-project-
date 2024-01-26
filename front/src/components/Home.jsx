// Home.jsx
import React, { useState } from 'react';
import NavBar from './Navbar.jsx';
import Slider from './Slider.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import JobPostings from './JobPostings.jsx';
import AddJob from './AddJob.jsx';
import Help from './Help.jsx'; // Import the Help component
import '../index.css'

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
      {view === 'Jobs' && <JobPostings onChangeView={changeView} />}
      {view === 'AddJob' && (
        <>
          <NavBar onChangeView={changeView} />
          {<AddJob onChangeView={changeView} />} {/* Pass the onChangeView function */}
        </>
      )}
      {view === 'Help' && <Help />} {/* Include the Help component */}
    </div>
  );
}

export default Home;
