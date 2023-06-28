import './styles/App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import Speaking from './components/Speaking';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { keepTheme } from './utils/themes';
import { useScrollToTop } from './utils/scrollToTop';

function App() {
  const [className, setClassName] = useState("theme-dark");

  useScrollToTop();
  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])

  return (
    <div className={`App ${className}`}>
      <div className="main-container">
        <h1 className="offscreen">Abbey Perini's Portfolio</h1>
        <NavBar setClassName={setClassName}/>
        <Blog home={true} />
        <Speaking home={true} />
        <Work home={true} />
        <About home={true} />
        <Contact home={true} />
      </div>
    </div>
  );
}

export default App;
