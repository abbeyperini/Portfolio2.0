import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransitionGroup } from 'react-transition-group';

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
        transitionName="header"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {!hidden && <Header key="1" hideHeader={hideHeader}/>}
      </CSSTransitionGroup>
      <div className="main-container">
        <CSSTransitionGroup
        transitionName="header"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          {hidden && <NavBar hideHeader={hideHeader}/>}
          {hidden && <Work />}
          {hidden && <Blog />}
          {hidden && <About />}
          {hidden && <Contact />}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}

export default App;
