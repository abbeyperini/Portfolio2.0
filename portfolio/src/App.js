import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';
import MainFull from './components/MainFullCSS';
import Single from './components/SingleCSS';
import { setTheme, keepTheme } from './utils/themes';

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

  useEffect(() => {
    keepTheme()
  })

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
        <CSSTransition
          classNames="navBar"
          in={hidden}
          timein={500}
          timeout={300}
          unmountOnExit>
          <NavBar setTheme={setTheme} hideHeader={hideHeader} chooseComponent={chooseComponent}/>
        </CSSTransition>
        <MainFull condition={hidden && !single} component={<Work />}/>
        <MainFull condition={hidden && !single} component={<Blog />}/>
        <MainFull condition={hidden && !single} component={<About />}/>
        <MainFull condition={hidden && !single} component={<Contact />}/>
        <Single condition={hidden && single && singleShow === "work"} component={<Work />}/>
        <Single condition={hidden && single && singleShow === "blog"} component={<Blog />}/>
        <Single condition={hidden && single && singleShow === "about"} component={<About />}/>
        <Single condition={hidden && single && singleShow === "contact"} component={<Contact />}/> 
      </div>
    </div>
  );
}

export default App;
