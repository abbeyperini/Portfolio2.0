import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [hidden, setHidden] = useState(false);
  const [single, setSingle] = useState(false);
  const [singleShow, setSingleShow] = useState('');
  
  const hideHeader = () => {
    if (hidden) {
      setHidden(false);
    } else if (!hidden) {
      setHidden(true);
      setSingle(false);
    }
  }

  const chooseComponent = (component) => {
      setSingle(true);
      setSingleShow(component);
  }

  // apply CSSTransition to main components as well
  return (
    <div className="App">
      <CSSTransition
        classNames="header"
        in={!hidden}
        timein={500}
        timeout={300}
        unmountOnExit>
        <Header key="1" hideHeader={hideHeader}/>
      </CSSTransition>
      <div className="main-container">
        {hidden && <NavBar hideHeader={hideHeader} chooseComponent={chooseComponent}/>}
        {hidden && !single && <Work />}
        {hidden && !single && <Blog />}
        {hidden && !single && <About />}
        {hidden && !single && <Contact />}
        {hidden && single && singleShow === "work" && <Work />}
        {hidden && single && singleShow === "blog" && <Blog />}
        {hidden && single && singleShow === "about" && <About />}
        {hidden && single && singleShow === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
