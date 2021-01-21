import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransitionGroup } from 'react-transition-group';
import Toggle from './components/Toggle';

function App() {
  const [hidden, setHidden] = useState(false)
  
  const hideHeader = () => {
    if (hidden) {
      setHidden(false)
    } else if (!hidden) {
      setHidden(true)
    }
  }

  return (
    <div className="App">
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {!hidden && <Header key="1" hideHeader={hideHeader}/>}
      </CSSTransitionGroup>
      <div className="main-container">
        {hidden && <NavBar hideHeader={hideHeader}/>}
        {hidden && <Toggle />}
        {hidden && <Work />}
        {hidden && <Blog />}
        {hidden && <About />}
        {hidden && <Contact />}
      </div>
    </div>
  );
}

export default App;
